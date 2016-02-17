import Ease from 'ease-functions';
import  * as Util from'./util';

export  default function Layout(){
    var layout = this;
    layout.itunes = {
            distance: function distance(width, sides) {
            },
            figures: function figures(props, images, initial) {
                var sides = images.length;
                var r = Math.floor(props.diameter / 2);
                var angle = Math.PI * 2 / (sides);
                var acceptable = Math.round(initial / angle) * angle;
                var rotate = 20;
                var maxRatio = 0.4;
                var zDistance = props.zDistance;
                var xDistance = props.xDistance;
                
                function cubicOut(time, begin, change, duration) {
                    return change * ((time = time / duration - 1) * time * time + 1) + begin;
                };

                function cubicIn(time, begin, change, duration) {
                    return change * (time /= duration) * time * time + begin;
                };

                return Util.range(0, sides).map(function(d) {
                    var ratio = {};
                    var angleR =Math.PI*(0.5) - ( d * angle + acceptable)  ; 
                    var thisRotate = 0.5;
                    var opacity = 0;

                    if(Math.abs(Math.cos(angleR)) !=  1  ){
                        ratio.easeOut =1+  Math.round((cubicOut( sides, 0, maxRatio, sides-1)*10)/10);
                        ratio.easeIn =1+  Math.round((cubicIn( sides, 0, maxRatio, sides-1)*10)/10);
                    }

                    if( Math.sin(angleR) != -1){
                        thisRotate = Math.sin(angleR + Math.PI *0.5)*0.3;   
                    }

                    if (Math.sin(angleR) != 1) {
                        opacity = Math.max(Math.sin(angleR), 0.4);
                    } else {
                        opacity = 1;
                    }

                    return {
                        rotateY: (0 - thisRotate*ratio.easeOut)*-1 ,
                        translateX: (r * Math.cos(angleR)) *xDistance*ratio.easeOut ,
                        translateZ: 0 -  r * Math.abs(1 - Math.sin(angleR)) *zDistance*ratio.easeOut, //bug issue with change z distance witnout min value
                        opacity: props.opacity ?  opacity*ratio.easeIn : 1 ,
                        zIndex:  Math.round(Math.sin(angleR)*100),
                        present: true,
                        key: d,
                        image: images[d].url

                    };
                });
            }
    };

   
    
    return layout; 
};


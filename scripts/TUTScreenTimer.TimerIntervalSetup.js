function setTimerInterval(ParentWidgetId,EventName, time_ms) {
    return setInterval(
        function(){
            const d = new Date();
            //let time = d.getTime();
            var elements = document.querySelectorAll('#'+ParentWidgetId+' [name='+EventName+']');
            for(var pos = 0; pos < elements.length; pos++){
                //elements[pos].event(time); --example where we sent the time back
                elements[pos].event();
            }

        }, time_ms);
}
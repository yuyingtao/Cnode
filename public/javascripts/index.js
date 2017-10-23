var tablist=document.querySelectorAll('#tabs .tab');
var topictab=document.querySelectorAll('.topics .topic');
function topicfiiter(type) {
    for(var i=0;i<topictab.length;i++){
        var topic=topictab[i];
        if(type==="all"){
            topic.style.display="block";
        }else if(type===topic.getAttribute("tab")){
            topic.style.display="block"
        }else{
            topic.style.display="none";
        }
    }
}
for (var i=0;i<tablist.length;i++)
{
    tablist[i].addEventListener('click',function(e){
        // e的作用
        var tab=e.target.parentNode;
        var type=tab.getAttribute('tab');
        topicfiiter(type);
    })
}
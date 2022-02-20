$(document).ready(function(){

    var  cls=document.getElementsByClassName("cv");
    var over=document.getElementById("icon");
    
    over.addEventListener("mouseover",function(event){
        cls[0].classList.add("hovered");
    });
    over.addEventListener("mouseout",function(event){
        cls[0].classList.remove("hovered");
    });

    var tab1=document.getElementById("tab1");
    var tab2=document.getElementById("tab2");
    var tab3=document.getElementById("tab3");

    var experience=document.getElementById("experience");
    var Education=document.getElementById("Education");
    var Skills=document.getElementById("Skills");

    experience.addEventListener("click",function(event){
       
        tab1.style.display="block";
        tab2.style.display="none";
        tab3.style.display="none";
        experience.classList.add("active");
        Education.classList.remove("active");
        Skills.classList.remove("active");
       
    });
    Education.addEventListener("click",function(event){
        
        tab2.style.display="block";
        tab1.style.display="none";
        tab3.style.display="none";
        experience.classList.remove("active");
        Education.classList.add("active");
        Skills.classList.remove("active");

    });
    Skills.addEventListener("click",function(event){
        
        tab3.style.display="block";
        tab2.style.display="none";
        tab1.style.display="none";
        experience.classList.remove("active");
        Education.classList.remove("active");
        Skills.classList.add("active");

    });
 
    var topBiography=$("#Biography").offset().top-50;
    var topwork=$("#work").offset().top-50;
    var topcontact=$("#contact").offset().top-50;
    window.onscroll=function(e)
    {
        if(document.documentElement.scrollTop>=0 && document.documentElement.scrollTop<=topBiography )
        {
            $('[href="#Home"]')[0].classList.add("current");
            $('[href="#Biography"]')[0].classList.remove("current");
            $('[href="#work"]')[0].classList.remove("current");
            $('[href="#contact"]')[0].classList.remove("current");
        }
        else if(document.documentElement.scrollTop>=topBiography && document.documentElement.scrollTop <=topwork )
        {
            $('[href="#Home"]')[0].classList.remove("current");
            $('[href="#Biography"]')[0].classList.add("current");
            $('[href="#work"]')[0].classList.remove("current");
            $('[href="#contact"]')[0].classList.remove("current");
        }else if(document.documentElement.scrollTop>=topwork && document.documentElement.scrollTop <=topcontact)
        {
            $('[href="#Home"]')[0].classList.remove("current");
            $('[href="#Biography"]')[0].classList.remove("current");
            $('[href="#work"]')[0].classList.add("current");
            $('[href="#contact"]')[0].classList.remove("current");
        }else
        {
            $('[href="#Home"]')[0].classList.remove("current");
            $('[href="#Biography"]')[0].classList.remove("current");
            $('[href="#work"]')[0].classList.remove("current");
            $('[href="#contact"]')[0].classList.add("current");   
        }
    }

    var theme=document.getElementById("theme");
    theme.addEventListener("click",function(event){
        var box=document.getElementsByClassName("color_sheme");
        if(box[0].classList.contains("opened"))
        {
            box[0].classList.remove("opened");
        }else
        {
            box[0].classList.add("opened");
        }

    });
    $(document).mouseup(function(e) 
    {
        var box=$("#box");
    
        // if the target of the click isn't the container nor a descendant of the container
        if (!box.is(e.target) && box.has(e.target).length === 0) 
        {
            var clsbox=document.getElementsByClassName("color_sheme");

            clsbox[0].classList.remove("opened");
        }
    });

    var closer=document.getElementById("close");
    closer.addEventListener("click",function(e){

        var clsbox=document.getElementsByClassName("color_sheme");

            clsbox[0].classList.remove("opened");
    });
   

    var next=document.getElementsByClassName("next");
    var prev=document.getElementsByClassName("prev");
    var items=document.getElementsByClassName("item");
    next[0].addEventListener("click",function(event){
        var pages=document.getElementsByClassName("currentpage")[0].innerHTML;

        if(pages==1)
        {

            document.getElementsByClassName("currentpage")[0].innerHTML=2;
            $('.item').addClass('disabled'); 
            items[3].classList.remove("disabled");
            items[4].classList.remove("disabled");
            items[5].classList.remove("disabled");

        
        }else if(pages==2)
        {
            document.getElementsByClassName("currentpage")[0].innerHTML=3;
            $('.item').addClass('disabled'); 
            items[6].classList.remove("disabled");
            items[7].classList.remove("disabled");
            items[8].classList.remove("disabled");
        }else if(pages==3)
        {
            document.getElementsByClassName("currentpage")[0].innerHTML=4;
            $('.item').addClass('disabled'); 
            items[9].classList.remove("disabled");
            items[10].classList.remove("disabled");
            items[11].classList.remove("disabled");
        }else if(pages==4)
        {
            document.getElementsByClassName("currentpage")[0].innerHTML=5;
            $('.item').addClass('disabled'); 
            items[12].classList.remove("disabled");
            items[13].classList.remove("disabled");
            items[14].classList.remove("disabled");
        }else
        {
            document.getElementsByClassName("currentpage")[0].innerHTML=1;
            $('.item').addClass('disabled'); 
            items[1].classList.remove("disabled");
            items[2].classList.remove("disabled");
            items[3].classList.remove("disabled");
        }
    });

    prev[0].addEventListener("click",function(event){
        var pages=document.getElementsByClassName("currentpage")[0].innerHTML;

        if(pages==1)
        {
            document.getElementsByClassName("currentpage")[0].innerHTML=5;
            $('.item').addClass('disabled'); 
            items[14].classList.remove("disabled");
            items[13].classList.remove("disabled");
            items[12].classList.remove("disabled");
        }else if(pages==2)
        {
            document.getElementsByClassName("currentpage")[0].innerHTML=1;
            $('.item').addClass('disabled'); 
            items[0].classList.remove("disabled");
            items[1].classList.remove("disabled");
            items[2].classList.remove("disabled");
        }else if(pages==3)
        {
            document.getElementsByClassName("currentpage")[0].innerHTML=2;
            $('.item').addClass('disabled'); 
            items[3].classList.remove("disabled");
            items[4].classList.remove("disabled");
            items[5].classList.remove("disabled");
        }else if(pages==4)
        {
            document.getElementsByClassName("currentpage")[0].innerHTML=3;
            $('.item').addClass('disabled'); 
            items[6].classList.remove("disabled");
            items[7].classList.remove("disabled");
            items[8].classList.remove("disabled");
        }else
        {
            document.getElementsByClassName("currentpage")[0].innerHTML=4;
            $('.item').addClass('disabled'); 
            items[9].classList.remove("disabled");
            items[10].classList.remove("disabled");
            items[11].classList.remove("disabled");
        }
    });

    var select=document.querySelectorAll(".item ul li a");
    for (let i = 0; i < select.length; i++) {
        select[i].addEventListener("click", function() {
            
            document.documentElement.style.setProperty("--main-color", select[i].getAttribute("data-color"));

        });
    }
   
    var closenav=document.getElementsByClassName("navclose");
    closenav[0].addEventListener("click",function(e){
        var header=document.getElementsByTagName("header");
        var nav=document.getElementsByTagName("nav");
        var main=document.getElementsByTagName("main");
        var nav_line=document.getElementsByClassName("nav-line");
        var arrows=document.getElementsByClassName("fa-solid");
        var h=document.getElementsByClassName("line");
    
        if(header[0].style.width!="0px")
        {
            header[0].style.width="0px";
            nav[0].style.display="none";
            nav_line[0].style.display="none";
            main[0].style.width="100vw";
            main[0].style.marginLeft="0px";
            arrows[0].style.transform="rotate(180deg)";
            $('.lines').addClass("h3");
        }else
        {
            header[0].style.width="350px";
            nav[0].style.display="block";
            nav_line[0].style.display="block";
            main[0].style.width="calc(100vw - 390px)";
            main[0].style.marginLeft="360px";
            arrows[0].style.transform="rotate(0deg)";
            $('.lines').removeClass("h3");

        }

   
                });

    var idsend=document.getElementById("send");
    idsend.addEventListener("click",function(e)
     {
    const form  = document.getElementById("sendmessage");
     form.addEventListener("submit", (e) => {
           e.preventDefault();
           var name=form.elements["name"].value;
           var email=form.elements["email"].value;
           var phone=form.elements["phone"].value;
           var message=form.elements["message"].value;
           document.getElementsByClassName("empty_notice")[0].style.display="none";
           document.getElementsByClassName("success")[0].style.display="none";

           if(name=="" || email=="" )
           {
             document.getElementsByClassName("empty_notice")[0].style.display="block"
             return false;
            }else
            {
                Email.send({
                    Host : "smtp.mailtrap.io",
                    Username : "wissamfarhat51@hotmail.com",
                    Password : "google.com123456F",
                    To : 'wissamfarhat51@hotmail.com',
                    From : "farhat.wissam@outlook.com",
                    Subject : "Portfolio message",
                    Body : "<html><h2>Name : </h2><strong>"+name+"</strong><br></br>"
                    +"<h2>Email : </h2><strong>"+email+"</strong><br></br>"
                    +"<h2>Phone : </h2><strong>"+phone+"</strong><br></br>"
                    +"<h2>Message : </h2><strong>"+message+"</strong><br></br>"
                    +"</html>"
                }).then(
                    document.getElementsByClassName("success")[0].style.display="block",

                );
                return true;
            }
       }); 
    });
    var toggle=document.getElementsByClassName("toggle");
    toggle[0].addEventListener("click",function(e){
        var mobile=document.getElementsByClassName("mobile");
        var style = window.getComputedStyle(mobile[0]);
        var top = style.getPropertyValue('opacity');

        if(top==="0")
        {
            toggle[0].classList.add("mobileopened");
            mobile[0].style.opacity="1";
            mobile[0].style.height="auto";
            
        }else
        {
            toggle[0].classList.remove("mobileopened");
            mobile[0].style.opacity="0";
            mobile[0].style.height="0";
            
        }
    });  
    
    $(window).scroll(function() {
        if($(window).scrollTop()>50)
        {
            document.getElementsByClassName("totop")[0].style.display="inline-grid";
        }else
        {
            document.getElementsByClassName("totop")[0].style.display="none";
   
        }
     });

     var totop=document.getElementsByClassName("totop");
     totop[0].addEventListener("click",function(e){
        window.scrollTo(0,0);
     });

     
});
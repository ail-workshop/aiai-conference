function header () {
  with(document) {
       write("<div id='headerMain'>");
            write("<a class='logo' href='./index.html'>");
              write("<span class='nav-title'>AIAI</span>");
            write("</a>");
           write("<div class='menuMain'>");
               write("<ul class='menu'>");
                    write("<li><a href='index.html' id='rgtlink1' name='rgtlink1'>Home</a>");
                    write("</li>")
                    write("<li><a href='call.html' id='a1' name='a1'>Call for papers</a>");
                    write("</li>")
                    write("<li><a href='program.html' id='rgtlink3' name='rgtlink3'>Program</a>");
                    write("</li>")
                    write("<li><a href='practical_info.html' id='rgtlink3' name='rgtlink3'>Practical Information</a>");
                    write("</li>")
                    write("<li><a href='mailto:julie.goncharov@uni-goettingen.de' id='rgtlink3' name='rgtlink3'>Contact us</a>");
                    write("</li>")
               write("</ul>");
           write("</div>");
        write("</div>");
      write("<div id='project-header'>");
            write("<image class='project-header-image' src='./assets/images/AIAI_prog.png'/>");
                write("<div class='main-title'>Agency and Intentions in AI</div>");
                  write("<div>");
                      write("<blockquote><p>How do you connect with a single piece of information?</p><p>Date ‘em</p>");
                          write("<footer><cite>Kyle Thompson</cite></footer>");
                      write("</blockquote>");
                write("</div>");
            write("</div>");
      write("</div>");
  }
  imgsearch();
}



function footerContainer(){
      with(document){
        write("<div id='footerMain'>");
            write("<div>");
                    write("<a target='_blank' href='https://ail-workshop.github.io/'>");
                        write("<img src='./assets/images/ail_logo_blue.png' style='width:120px'>");
                    write("</a>");
            write("</div>");
            write("<div class='project-card-text-container'>");
                    write("<a class='button' target='_blank' href='https://ail-workshop.github.io/'>");
                        write("Agency and Intentions in Language");
                    write("</a>");
            write("</div>");
          write("<div>");
                  write("<a target='_blank' href='https://uni-goettingen.de/de/vorschau_3dd0fb16351b3f7ffbd9a226d14b3a9b/652812.html'>");
                      write("<img src='./assets/images/ASG_white.png' style='width:100px'>");
                  write("</a>");
          write("</div>");
          write("<div class='project-card-text-container'>");
                  write("<a class='button' target='_blank' href='https://uni-goettingen.de/de/vorschau_3dd0fb16351b3f7ffbd9a226d14b3a9b/652812.html'>");
                      write("Action Sensitivity in Grammar");
                  write("</a>");
          write("</div>");
          write("<div>");
                  write("<a target='_blank' href='https://ail-workshop.github.io/'>");
                      write("<img src='./assets/images/ail_logo_blue.png' style='width:120px'>");
                  write("</a>");
          write("</div>");
          write("<div class='project-card-text-container'>");
                  write("<a class='button' target='_blank' href='https://ail-workshop.github.io/'>");
                      write("Agency and Intentions in Language");
                  write("</a>");
          write("</div>");
        write("</div>");
          }
  }



function leftMenu(){
      with(document){
              write("<ul class='leftMenu'>");
                  write("<li><a href='#'>Listing1</a></li>");
                  write("<li><a href='#'>Listing2</a></li>");
                  write("<li><a href='#'>Listing3</a></li>");
                  write("<li><a href='#'>Listing4</a></li>");
                  write("<li><a href='#'>Listing5</a></li>");
                  write("<li><a href='#'>Listing6</a></li>");
                  write("<li><a href='#'>Listing7</a></li>");
                  write("<li><a href='#'>Listing8</a></li>");
              write("</ul>");
          }
  }






function showTxt(){
  with(document){
          write("<div><a href='#' onmouseover='showDiv(\"d1\")' onmouseout='hideDiv(\"d1\")'>Click here</a></div>");
          write("<div style='display:none;' id='d1'>This is default Description. This is default Description.This is default Description.</div>");
      }
}




var act='';
function show(sid,cid)
{
  if(document.getElementById(cid).className=='sel')
  {
      act=cid;
  }
  document.getElementById(sid).style.display='block';
  document.getElementById(cid).className='sel';
}

function hide(sid,cid)
{
  document.getElementById(sid).style.display='none';
  document.getElementById(cid).className='';
  if(act==cid)
  {
      document.getElementById(act).className='sel';
  }
}




function showDiv(d)
{
  document.getElementById(d).style.display='block';
}
function hideDiv(d)
{
  document.getElementById(d).style.display='none';
}





function imgsearch() {
      var sPath = window.location.pathname;
      var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
      //alert(sPage)
      ///////////////////about debt///////////////////////
      if (sPage.toLowerCase() == 'include.html'.toLowerCase()) {
          setdeafulturlwith('', 'rgtlink1', 'rgtlink1');
      }
      if (sPage.toLowerCase() == 'about.html'.toLowerCase()) {
          setdeafulturlwith('', 'a1', 'a1');
      }

      //Start Sub menu//
      if (sPage.toLowerCase() == 'product_1.html'.toLowerCase()) {
          setdeafulturlwith('', 'rgtlink2', 'rgtlink2');
          setdeafulturlwith('', 'rgtlink01', 'rgtlink01');
      }
      if (sPage.toLowerCase() == 'product_2.html'.toLowerCase()) {
          setdeafulturlwith('', 'a1', 'a1');
          setdeafulturlwith('', 'a02', 'a02');
      }

      //End Sub menu//


      if (sPage.toLowerCase() == 'product.html'.toLowerCase()) {
          setdeafulturlwith('', 'rgtlink2', 'rgtlink2');
      }
       if (sPage.toLowerCase() == 'contact.html'.toLowerCase()) {
          setdeafulturlwith('', 'rgtlink3', 'rgtlink3');
      }
  }

  function setdeafulturlwith(pgname, hrefid, td_id) {
      document.getElementById(hrefid).removeAttribute("href");
      document.getElementById(td_id).onclick = '';
      document.getElementById(td_id).className = "sel";
  }


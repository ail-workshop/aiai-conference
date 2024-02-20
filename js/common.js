/* https://www.w3web.net/how-to-add-header-and-footer-in-javascript/ */

function header () {
  with(document) {
       write("<div id='headerMain'>");
            write("<a class='logo' href='./index.html'>");
              write("<span class='nav-title'>AIAI</span>");
            write("</a>");
           write("<div class='menuMain'>");
               write("<ul class='menu'>");
                    write("<li><a href='index.html'>Home</a>");
                    write("</li>")
                    write("<li><a href='call.html'>Call for papers</a>");
                    write("</li>")
                    write("<li><a href='program.html'>Program</a>");
                    write("</li>")
                    write("<li><a href='practical_info.html'>Practical Information</a>");
                    write("</li>")
                    write("<li><a href='mailto:julie.goncharov@uni-goettingen.de'>Contact us</a>");
                    write("</li>")
               write("</ul>");
           write("</div>");
        write("</div>");
      write("<div id='project-header'>");
            write("<image class='project-header-image' src='./assets/images/AIAI_prog.png'/>");
                write("<div class='main-title'>Agency and Intentions in AI</div>");
                write("<div class='subheader-text-light'>University of Göttingen, May 16-17, 2024</div>");
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
                    write("<a target='_blank' href='https://uni-goettingen.de/'>");
                        write("<img src='./assets/images/ugoettingen.png' style='width:120px'>");
                    write("</a>");
            write("</div>");
            write("<div class='project-card-text-container'>");
                    write("<a class='button' target='_blank' href='https://uni-goettingen.de/'>");
                        write("University of Göttingen");
                    write("</a>");
            write("</div>");
          write("<div>");
                  write("<a target='_blank' href='https://www.dfg.de/en'>");
                      write("<img src='./assets/images/dfg.pnh.png' style='width:100px'>");
                  write("</a>");
          write("</div>");
          write("<div class='project-card-text-container'>");
                  write("<a class='button' target='_blank' href='https://www.dfg.de/en'>");
                      write("Deutsche Forschungsgemeinschaft");
                  write("</a>");
          write("</div>");
          write("<div>");
                  write("<a target='_blank' href='https://vanriemsdijkfoundation.org/'>");
                      write("<img src='./assets/images/VRF.png' style='width:120px'>");
                  write("</a>");
          write("</div>");
          write("<div class='project-card-text-container'>");
                  write("<a class='button' target='_blank' href='https://vanriemsdijkfoundation.org/'>");
                      write("The Van Riemsdijk Foundation");
                  write("</a>");
          write("</div>");
/*ADD UofG, DFG, and possibly VRF
          write("<div>");
                  write("<a target='_blank' href='https://ail-workshop.github.io/'>");
                      write("<img src='./assets/images/ail_logo_blue.png' style='width:120px'>");
                  write("</a>");
          write("</div>");
          write("<div class='project-card-text-container'>");
                  write("<a class='button' target='_blank' href='https://ail-workshop.github.io/'>");
                      write("University of Goettingen");
                  write("</a>");
          write("</div>");
*/
        write("</div>");
          }
  }

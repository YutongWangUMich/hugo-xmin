function make_link(url,title){
  return "<a href = \"" + url + "\">"+title+"</a>";
}

function make_file_link(html_file_path){
  return "file.edit(\"content/"+html_file_path.slice(0,-5)+".Rmd\")";
}

function make_remove_link(html_file_path){
  var ret_string = "file.remove(\"content/"+html_file_path.slice(0,-5)+".Rmd\");"
  ret_string += "file.remove(\"content/"+html_file_path.slice(0,-5)+".md\");";
  ret_string += "file.remove(\"content/"+html_file_path.slice(0,-5)+".html\")";
  return ret_string;
}


function copyToClipboard(text) {
  window.prompt("Copy to clipboard: Cmd+C, Enter", text);
}



$( document ).ready(function() {
  $( ".post_listing" )
    .hover(function() {
      $(this).find('.copy_link').css('visibility','visible');
    },
    function() {
      $(this).find('.copy_link').css('visibility','hidden');
    });
});

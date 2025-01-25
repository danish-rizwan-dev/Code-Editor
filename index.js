$('#runBtn').on('click', function() {
    const html = $('#htmlCode').val();  
    const js =$('#jsCode').val();
    const css =$('#cssCode').val();
    
    $('#style').html(css);
    $('#preview').html(html);
    eval(js);
});

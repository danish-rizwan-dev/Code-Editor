

$('#runBtn').on('click', function() {
    const html = $('#htmlCode').val();  
    const js =`<script>${$('#jsCode').val()}</script>`;
    const css =`<script>${$('#cssCode').val()}</script>`
    
    let combinedCode = html + js + css ;

    $('#preview').html(combinedCode);
});
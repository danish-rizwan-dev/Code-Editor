

$('#runBtn').on('click', function() {
    const html = $('#htmlCode').val();  
    const js =`<script>${$('#jsCode').val()}</script>`;
    const css =`<style>${$('#cssCode').val()}</style>`;
    
    let combinedCode = html + css ;
    $('#preview').html(combinedCode);
    eval(jssStr);
});

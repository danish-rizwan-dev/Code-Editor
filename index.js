

$('#runBtn').on('click', function() {
    const html = $('#htmlCode').val();  
    const js =`<script>${$('#jsCode').val()}</script>`;
    const css =`<style>${$('#cssCode').val()}</style>`;
    
    let combinedCode = html + js + css ;

    $('#preview').html(combinedCode);
});

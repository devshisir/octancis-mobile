var toolbarOptions = [
      ['bold', 'italic', 'underline',],
      [{
        'direction': 'rtl'
      }], // text direction
      [{
        'list': 'ordered'
      }, {
        'list': 'bullet'
      }],
      [{
        'indent': '-1'
      }, {
        'indent': '+1'
      }], // outdent/indent
      
    ];

    var quillFull = new Quill('#document-full', {
      modules: {
        toolbar: toolbarOptions,
        autoformat: true
      },
      theme: 'snow',
      placeholder: '',
    });
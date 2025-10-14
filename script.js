 </style>
    <title>Better Instagram</title>
  </head>
  <body>
    <h1 style="text-align: center">Arrange Images by drag and drop</h1>
    <div class="flex" id="parent">
      <div draggable="true" class="image" id="div1">Image 1</div>
      <div draggable="true" class="image" id="div2">Image 2</div>
      <div draggable="true" class="image" id="div3">Image 3</div>
      <div draggable="true" class="image" id="div4">Image 4</div>
      <div draggable="true" class="image" id="div5">Image 5</div>
      <div draggable="true" class="image" id="div6">Image 6</div>
    </div>
    <script>
        let draggedElement = null;

        const images = document.querySelectorAll('.image');
        
        images.forEach(
            image=>{
                //startdragging
                image.addEventListener('dragstart', function(e){

                    draggedElement=image;
                    // alert(draggedElement)
                })

                image.addEventListener('dragenter', function(e){
                    e.preventDefault();
                })

                image.addEventListener('dragover', function(e){
                    e.preventDefault();
                })

                // image.addEventListener('dragend', function(e){
                //     draggedElement=null;
                //     // alert(draggedElement)
                // })

                image.addEventListener('drop', function(e){

                    // alert('dropped')
                    // if(e.target!==draggedElement){
                    // console.log(getComputedStyle(draggedElement))
                        const draggedBg = getComputedStyle(draggedElement).backgroundImage;
                        const targetBg = getComputedStyle(e.target).backgroundImage;
                        // alert(draggedBg)
                        //swap
                        draggedElement.style.backgroundImage=targetBg;
                        e.target.style.backgroundImage=draggedBg;

                    
                })
            }
        )
    </script>
  </body>
</html>


const insert=document.querySelector('#insert');
window.addEventListener('keydown', function(event) {

insert.innerHTML=`
<table>
            <tr>
              <th>key</th>
              <th>Key Code</th>
              <th>Code</th>
            </tr>
            <tr>
              <td id="t1">${event.key}</td>
              <td id="t2">${event.keyCode}</td>
              <td id="t3">${event.code}</td>
            </tr>
          
          </table>
`



    // console.log('Key pressed:', event.key);
    // console.log('Ctrl key pressed:', event.ctrlKey);
    // let key=event.key;
    // // Other properties can be accessed similarly
    // this.document.querySelector('#t1').innerHTML=`${key}`;
});

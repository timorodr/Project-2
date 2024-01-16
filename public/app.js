// const tattoo = true


// document.getElementById("add-btn").addEventListener("click", function(){
//     generateForm1()
// })

// document.getElementById("settings-btn").addEventListener("click", function(){
//     generateForm2()
// })

// function generateForm1(formName) {
//     document.getElementById('formContainer').innerHTML = ''

//     const form = document.createElement('form')
//     form.innerHTML = ` <form action="/tattooly" method="post">
//   <fieldset>
//       <legend>Add Tattoo</legend>
//     <label>
//       This is a sentence<input
//         type="text"
//         name="image"
//         placeholder="photo url"
//       />
//     </label>
//     <label>
//       DESCRIPTION:<input
//         type="text"
//         name="description"
//         placeholder="caption"
//       />
//     </label>
//   </fieldset>
//   <input type="submit" value="create new tattoo" />
// </form>`

// document.getElementById('formContainer').appendChild(form)
// }

// function generateForm2() {
// // Clear previous forms
// document.getElementById('formContainer').innerHTML = '';

// // Create Form 2
// const form = document.createElement('form');
// form.innerHTML = `
    

    
//       <div class="form-container">
//           <form action="/tattooly" method="post">
//             <h1 class="new-h1">Add Tattoo</h1>
//             <div class="input-box">
//               <input type="text" name="name" placeholder="profile name"/>
            
//             </div>
//             <div class="input-box">
//               <input type="text" name="userHandle" placeholder="whats your @"/>
             
//             </div>
//             <input type="submit" value="Share" class="profile-settings-btn"/>
//           </form>
//       </div>
//   `;

// // Append the form to the container
// document.getElementById('formContainer').appendChild(form);
// }

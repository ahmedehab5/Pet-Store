var record = [];

if (document.URL == 'file:///F:/projects/pet%20store/admin/admin.html' || 'http://127.0.0.1:5500/admin/admin.html') {


    var gender;
    var type;
    var animalFamily;
    var age;
    var weight;
    var price;
    var filePath;
    //add image 
    const wrapper = document.querySelector(".wrapper");
    const fileName = document.querySelector(".file-name");
    const defaultBtn = document.querySelector("#default-btn");
    const customBtn = document.querySelector("#custom-btn");
    const cancelBtn = document.querySelector("#cancel-btn i");
    const img = document.querySelector("img");

    function defaultBtnActive() {
        defaultBtn.click();
    }
    if (defaultBtn) {
        defaultBtn.addEventListener("change", function() {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function() {
                    const result = reader.result;
                    img.src = result;
                    wrapper.classList.add("active");
                }
                cancelBtn.addEventListener("click", function() {
                    img.src = "";
                    wrapper.classList.remove("active");
                })
                reader.readAsDataURL(file);
            }
            if (this.value) {
                var regEx = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
                filePath = this.value.match(regEx)[0];
            }
        });
        c: //ggs/rger

            document.getElementById("add_btn").onclick = function(e) {
                if (document.getElementById("gender_txt").value != "" &&
                    document.getElementById("type_txt").value != "" &&
                    document.getElementById("animalfamily_txt").value != "" &&
                    document.getElementById("age_txt").value != "" &&
                    document.getElementById("weight_txt").value != "" &&
                    document.getElementById("price_txt").value != ""
                ) {
                    gender = document.getElementById("gender_txt").value;
                    type = document.getElementById("type_txt").value;
                    animalFamily = document.getElementById("animalfamily_txt").value;
                    age = document.getElementById("age_txt").value;
                    weight = document.getElementById("weight_txt").value;
                    price = document.getElementById("price_txt").value;

                } else
                    alert("Please enter all information");
            }
    }

};
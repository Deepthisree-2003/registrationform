h1{
    background-color: purple;
    text-align: center;
    color: black;
}

body .container{
    margin: auto;
}

.row{
    display: flex;
}

.coloumn{
    flex: 50%;

}

.form{
    padding: 3em;
    text-align: left;
    border-right: red;
}

.text_field input{
    display: inline-flex;
    width: 40%;
}


label{
    display: inline-flex;
    margin: auto;
    width: 30%;
    padding: 0.7em;
}

.radio-container{
    display: inline-flex;
    flex-direction: column;
}

.female{
    margin-top: -20%;
}

.radio-container input{
    margin-top: 1em;
}

.checkbox-container input{
    margin-top: 1em;
}

.checkbox-container label{
    width: auto;
}


.btn .btn-danger{
    margin-left: 1em;
}

.Enrolled_Students{
    text-align: center;
}

.result.row{
    width: 90%;
    display: none;
}

.result .data.coloumn{
    border: 1px solid grey;
    text-align: left;
    align-items: center;
    align-content: center;
    background-color: brown;
    color: black;
    font-weight: bold;
    width: 70%;
    height: 2em;
    flex: inherit;
} 

.result .image.coloumn{
    border: 1px solid green;
    text-align: left;
    align-items: center;
    align-content: center;
    background-color:  orange;
    ;
    color: white;
    font-weight: bold;
    width: 30%;
    flex: inherit;
    height: 2em;
}

.result p{
    margin: auto;
}

.enroll.row{
    display: inline-flex;
    width: 90%;
}

.enroll .e_data.coloumn{
    border: grey;
    text-align: left;
    align-items: center;
    align-content: center;
    color: black;
    width: 70%;
    height: 9em;
    flex: inherit;
} 

.enroll .e_image.coloumn{
    border: 1px solid grey;
    color: white;
    width: 30%;
    flex: inherit;
    height: 9em;
}

.enroll p{
    margin: auto;
}

img{
    width: 100%;
    height: 100%;
}
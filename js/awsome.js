const awsome = ['fa fa-telegram', 'fa fa-laptop','fa fa-code','fa fa-television', 'fa fa-image' ]
awsome.forEach((i)=>{
    getID('awsome').innerHTML += `
    <div class="awsome" onclick="showAwsome(${awsome.indexOf(i)})">
        <i class="${i}" style="font-size:48px;color:gray"></i>
    </div>
    `
});

const showAwsome = id => {
    const awsomeDiv = document.querySelectorAll(".awsomeBody");
    for (let index = 0; index < awsomeDiv.length; index++) {
        awsomeDiv[index].style.display = 'none';
        document.querySelectorAll('.awsome')[index].classList.remove('activeAwsome');
    }
    document.querySelectorAll('.awsomeBody')[id].style.display = 'block'
    document.querySelectorAll('.awsome')[id].classList.add('activeAwsome');
}

// awsome decorate 
const fet = async () =>{
    const urlF = await fetch("./js/data/data.json");
    const res = await urlF.json();
   
    res.forEach(data=>{
        getID("awsomeDecorate").innerHTML += `
        <div class="awsomeBody">
            <div>
                <h2>
                    ${data.title}
                </h2>
                
            </div>
            <div class="awsomeBodyImage">
                <p>
                    ${data.body}
                </p>
                <img src="${data.Image}">
            </div>
        </div>
        `
    })
    document.querySelectorAll('.awsomeBody')[0].style.display = 'block';
    document.querySelectorAll('.awsome')[0].classList.add('activeAwsome');
    
}
fet()

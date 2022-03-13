const mySkillArray = ['HTML/CSS', 'PYTHON', 'JAVASCRIPT', 'SQL', 'C','DATA SCIENCE'];
const skillPercentage = ["100%", "20%", "90%", "60%", "10%", "5%"];

mySkillArray.forEach(skill=>{
    
    getID("mySkill").innerHTML += `
    <div class="html">
        <h3>${skill}</h3>
        <div class="skill">
            <div class="skill-complete" style="width:${skillPercentage[mySkillArray.indexOf(skill)]};">

            </div>
            <div class="skillParcent">
            ${skillPercentage[mySkillArray.indexOf(skill)]}
            </div>
        </div>
    </div>
    `
})
// const mySkill =()=>{

// }
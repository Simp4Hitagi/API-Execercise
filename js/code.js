// res,req
fetch("../data/data.json")
.then((res)=>{
    return res.json();
})
.then((info)=>{
    let newInfo = info.laptop;
    console.table(newInfo)
})
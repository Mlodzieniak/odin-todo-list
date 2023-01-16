import formatISO9075 from "date-fns/formatISO9075";

const todoFactory = ()=>{
   let title="Project";
   let description="";
   const creationDate=formatISO9075(new Date);
   let deadlineDate="";
   const priority={
    low:1,
    medium:0,
    high:0,
   };
    return{
        setTitle (newTitle) {
            title=newTitle;
        },
        getTitle:()=>title,

        setDescription (newDesc){
            description=newDesc;
        },
        getDescription:()=>description,

        getCreationDate:()=>creationDate,

        setDeadlineDate(newDeadLineDate){
            deadlineDate = newDeadLineDate;
        },
        getDeadlineDate:()=>deadlineDate,
        setPriority(){},
        getPriority:()=>priority

        
       
    };};
export default todoFactory;
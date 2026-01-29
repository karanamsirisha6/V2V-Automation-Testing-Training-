class Student{
    private marks: number;
    
    constructor(marks: number){
        this.marks=marks;
    }
    set setMarks(marks: number){
        if(marks>=0 && marks <=100){
        this.marks=marks;
    } else{
        console.log("Invalid marks");
    }
    }
    get getMarks(): number{
        return this.marks;
    }
}

    
const st = new Student(70);
st.setMarks=85;
console.log(st.getMarks);

//output:85
    
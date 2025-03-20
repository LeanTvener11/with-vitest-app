export default function( value: "feedback" | "error" | "success") {
    if(value === "feedback") {
        return "your doing great"
    } else if(value === "error") {
        return "or what that suppose to happen"
    } else if(value === "success") {
        return "you did it!"
    }
}

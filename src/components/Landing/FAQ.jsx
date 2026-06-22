import FaqItem from "./FaqItem";
import { faqData } from "../../utils/faqData";
import { useState } from "react";

function FAQ(){
    const [activeId,setActiveId]=useState(null);

    function handleToggle(id){
        setActiveId((prev)=>prev===id?null:id)
    }

    return (
       <section className="faq-section">
        <h2 className="faq-title"> Frequently Asked Questions</h2>

        {faqData.map((faq)=>(
            <FaqItem key={faq.id} faq={faq} isOpen={activeId===faq.id} onToggle={()=>handleToggle(faq.id)}/>
        ))}
       </section>
    )
}

export default FAQ;

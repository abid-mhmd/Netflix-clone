import { FiPlus} from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={onToggle}>
        <span>{faq.question}</span>
        {isOpen ? <RxCross2 /> : <FiPlus />}
      </button>

      <div className={`faq-answer ${isOpen ? "active" : ""}`}>
        <p>{faq.answer}</p>
      </div>
    </div>
  );
}

export default FaqItem;

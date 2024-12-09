const dataFAQs = [
  ["Chatbot là gì?",
    "Chatbot là một ứng dụng AI có khả năng tương tác với con người thông qua ngôn ngữ tự nhiên. Chatbot có thể giúp trả lời câu hỏi, cung cấp thông tin cho người sử dụng một cách nhanh chóng."],
  ["Làm thế nào để sử dụng chatbot?",
    "Để sử dụng chatbot, bạn chỉ cần nhập câu hỏi hoặc yêu cầu của mình vào ô chat và chatbot sẽ trả lời ngay lập tức."],
   ["Cách sử dụng chatbot hiệu quả",
   "Để sử dụng chatbot một cách hiệu quả bạn nên đặt câu hỏi một cách rõ ràng đầy đủ để mô hình có thể đưa ra câu trả lời tốt nhất."],
  ["Thông tin từ chatbot có đáng tin cậy không?",
   "Dữ liệu của chatbot được lấy từ văn bản Luật chính thức của Việt Nam. Tuy nhiên, ở một số trường hợp câu trả lời có thể không chính xác nên hãy tự mình kiểm chứng thông tin, bạn nhé!"],
  [ "Làm gì nếu chatbot không trả lời đúng yêu cầu của tôi?",
   "Nếu bạn không hài lòng với câu trả lời: Hãy đặt câu hỏi một cách chi tiết, cụ thể hơn; Cung cấp thêm ngữ cảnh cho câu hỏi; Thử hỏi lại câu hỏi sau một thời gian."],
]

function FAQPage() {
  return (
    <div className="flex justify-center min-h-[85vh] h-auto bg-gradient-to-br from-blue-200 via-purple-100 to-blue-100 animate-gradient-xy">
      <div className="md:w-[50%] px-4 py-8">
        <h1 className="text-3xl text-center font-bold mb-8 bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] bg-clip-text will-change-auto [-webkit-text-fill-color:transparent] [transform:translate3d(0,0,0)] motion-reduce:!tracking-normal max-[1280px]:!tracking-normal [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)]">
          Những câu hỏi thường gặp (FAQs)
        </h1>
        {dataFAQs.map((item, i) => (
          <div 
            key={i} 
            className="mt-4 collapse collapse-plus bg-white rounded-xl shadow-lg 
                     hover:shadow-xl transition-all duration-300 ease-in-out 
                     hover:scale-[1.02]"
          >
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-lg font-medium peer-checked:text-primary-focus">
              {item[0]}
            </div>
            <div className="collapse-content">
              <p className="text-gray-600 leading-relaxed">{item[1]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQPage;
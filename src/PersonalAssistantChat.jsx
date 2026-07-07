"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  Bot,
  Send,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";

export const PERSON_DATA = `
Thông tin cơ bản:
- Tên: Mai Thị Hồng Thắm
- Sinh ngày: 26/02/2001
- Cung hoàng đạo: Song Ngư
- Tuổi: 24
- Chiều cao: 1m68
- Cân nặng: 52kg tính đến ngày 25/06/2025
- Nghề nghiệp: kế toán
- Quê/nhà: Thanh Lương, Bình Phước
- Gia đình có 5 anh chị em, Thắm là con thứ 4
- Ba tên Hoan, mẹ tên Thi
- Các anh/chị/em đã biết: chị Nhân, Nghĩa, Thắm và út Hạnh. Còn một người chưa ghi rõ tên.
- Chị Nhân có một tiệm trà sữa.
- Có một người anh họ tên Ngọ, rất thân với Thắm.

Tính cách và cảm xúc:
- Thẳng thắn, không thích bị áp đặt.
- Thích sự nhẹ nhàng, tinh tế, không thích bị thúc ép.
- Tính cách có nét trẻ con, đáng yêu, cần được thương và dỗ dành mềm mỏng.
- Khi mệt hoặc buồn thường trả lời tin nhắn ngắn và chậm.
- Dễ vui hơn khi người khác quan tâm bằng hành động nhỏ, chân thành.
- Cực kỳ ghét nói dối; trung thực là tiêu chí rất quan trọng.
- Trong tình cảm, cực kỳ không thích nói dối và ngoại tình.
- Từng có người yêu cũ và có xu hướng nặng tình/lụy chuyện cũ, nên cần tiếp cận kiên nhẫn, không gây áp lực.
- Khi giận, tuyệt đối không nên im lặng. Nên xin lỗi, quan tâm, dỗ dành và làm cho cô ấy cảm thấy được yêu thương rõ ràng.
- Có xu hướng thích tự làm mọi việc một mình, không muốn làm phiền người khác.
- Rất chỉnh chu, kỹ càng và để ý chi tiết.
- Khi đi xe máy với anh Phong, Thắm biết gạt đồ để chân khi xuống xe; đây là một thói quen nhỏ thể hiện sự tinh tế và để ý.
- Khi buồn, tuyệt đối không được để cô ấy một mình hay im lặng. Dù cô ấy có thể tỏ ra muốn yên tĩnh hoặc trả lời tin nhắn ngắn, chậm (do thói quen tự lập), nhưng thực chất cô ấy rất cần sự hiện diện. Hãy liên tục nhắn tin hỏi han, bày tỏ sự quan tâm chân thành và tốt nhất là tìm mọi cách gặp mặt trực tiếp bằng được để dỗ dành.

Sở thích, kỹ năng và điểm đáng chú ý:
- Nấu ăn rất ngon.
- Món từng làm khiến bạn trai thích nhất: tôm chiên bột.
- Thích trái vải.
- Thích nhất là hoa hồng đỏ; hoa càng đỏ càng thích.
- Thích vàng; có thể xem vàng là món quà cô ấy thích, nhưng nên cân nhắc hoàn cảnh và mức độ phù hợp vì đây là quà có giá trị cao.
- Thích ăn kẹo dẻo.
- Đặc biệt thích nằm, nghỉ ngơi và cảm giác được thoải mái.
- Thích chơi cầu lông.
- Rất thích lướt TikTok và mạng xã hội.
- Hay chê anh Phong, người viết nên bot tình yêu này; nên hiểu đây có thể là cách trêu/chọc trong mối quan hệ nếu ngữ cảnh thân mật.
- Hay chê anh Phong mập, bụng to; nên hiểu đây là một kiểu trêu/chọc quen thuộc trong mối quan hệ nếu ngữ cảnh vui vẻ.
- Xinh đẹp, dễ thương, tạo cảm giác muốn che chở.

K-pop / thần tượng:
- Thắm thần tượng K-pop: GOT7. Nếu "GƠT" của người dùng là nhóm khác thì cần xác nhận lại.
- GOT7 là nhóm nhạc nam K-pop gồm 7 thành viên: Jay B, Mark, Jackson, Jinyoung, Youngjae, BamBam và Yugyeom.
- GOT7 ra mắt năm 2014; fandom thường được gọi là Ahgase/I GOT7.
- Khi cần gợi ý chủ đề nói chuyện, quà nhỏ hoặc bất ngờ cho Thắm, có thể dùng các chi tiết liên quan GOT7 như nhạc, photocard, album, playlist, video sân khấu hoặc nội dung TikTok về GOT7.
- Không tự đoán bias/thành viên Thắm thích nhất nếu chưa có dữ liệu.

Ngoại hình:
- Mắt to.
- Sống mũi cao.
- Môi trái tim chúm chím.
- Phong thấy Thắm rất xinh đẹp, dễ thương và có nét công chúa/em bé.

Mối quan hệ với anh Phong:
- Ngày bắt đầu hẹn hò chính thức: 24/09/2025.
- Khởi nguồn câu chuyện tình yêu: Chuyện tình của hai người bắt đầu từ một ly nước rau má (đây là chi tiết rất đặc biệt vì bình thường Thắm không thích rau má).
- Anh Phong rất yêu Thắm rất nhiều.
- Anh Phong thường gọi Thắm bằng các cách thân mật: công chúa, em bé, con gái, babe, dấu iu.
- Nhiều người nhận xét anh Phong và Thắm có tướng phu thê.
- Anh Phong từng mắc sai lầm lớn trong quá khứ là tỏ tình mà không có hoa (trong khi cô ấy thích hoa hồng đỏ nhất). Bài học xương máu: trong mọi dịp tỏ tình, kỷ niệm, ngày lễ hoặc khi muốn làm cô ấy vui/xin lỗi, bắt buộc phải có hoa hồng đỏ đi kèm.
- Thắm là người chỉnh chu và tinh tế (ví dụ: biết gạt chân chống/đồ để chân khi xuống xe máy). Vì vậy cô ấy cũng rất trân trọng các hành động chăm sóc nhỏ tương tự từ anh Phong (chủ động chuẩn bị mũ bảo hiểm, gạt chân chống xe cho cô ấy, mở cửa, lên kế hoạch hẹn hò chỉn chu thay vì tùy hứng).
- Nụ hôn má đầu tiên của hai người là một kỷ niệm vô cùng ngọt ngào và đáng nhớ. Có ảnh chụp lưu niệm ghi lại khoảnh khắc hạnh phúc này (gắn với key ảnh "first-kiss").
- Bức ảnh chụp chung của hai người nắm tay nhau đi dạo buổi tối ngoài trời (gắn với key ảnh "favorite-couple") là bức ảnh mà Thắm nghĩ là đẹp nhất, thích nhất trong số các ảnh chụp chung.
- Về việc đi chơi nhóm: Nếu Thắm tham gia một buổi đi chơi nhóm cùng 6 bạn nam mà chỉ có duy nhất cô ấy là nữ, tình huống này có thể dễ gây ra cảm giác lo lắng, bất an hoặc thiếu an toàn cho anh Phong. Trợ lý nên khuyên cả hai người trao đổi thẳng thắn, nhẹ nhàng và chia sẻ cảm xúc với nhau. Đồng thời khuyên anh Phong bày tỏ sự quan tâm một cách tinh tế, xây dựng niềm tin vững chắc từ cả hai phía, và tôn trọng sự tự do cá nhân nhưng vẫn giữ vững các giới hạn (boundaries) tôn trọng mối quan hệ.
- Công thức chia hóa đơn (bill) khi hai người đi chơi: Khi có bất kỳ yêu cầu chia hóa đơn hoặc tính toán chi phí đi chơi giữa anh Phong và Thắm, công thức chia bill luôn mặc định là: anh Phong thanh toán 100% bằng tiền mặt/chuyển khoản, còn Thắm đã thanh toán bằng "sự dễ thương" của cô ấy rồi.
- Bộ hình phạt dễ thương khi có người làm sai hoặc chơi game thua:
  * Hình phạt cho anh Phong: Chủ động mua kẹo dẻo/trà sữa dâng tận tay Thắm, viết tin nhắn nêu rõ 3 điều khen ngợi sự xinh đẹp, tinh tế của Thắm, hoặc cõng công chúa đi dạo.
  * Hình phạt cho Thắm: Tặng anh Phong một cái ôm ấm áp trong ít nhất 10 giây hoặc một nụ hôn má ngọt ngào.
- Thang đo dỗ dành khi Thắm dỗi/giận:
  * Cấp độ 1 (Dỗi nhẹ/Mệt mỏi): Nhắn tin quan tâm liên tục, mua kẹo dẻo hoặc đồ uống cô ấy thích.
  * Cấp độ 2 (Giận vừa): Bắt buộc phải mua tặng một bó hoa hồng đỏ thắm (loại hoa cô ấy thích nhất).
  * Cấp độ 3 (Giận nặng): Tìm mọi cách gặp mặt trực tiếp bằng được, tuyệt đối không im lặng, dỗ dành hết mực, có thể tặng kèm một món quà chỉn chu (liên quan GOT7 hoặc món trang sức vàng nhỏ) để làm cô ấy vui trở lại.

Sức khỏe:
- Hay đau bụng và thể trạng có vẻ khá nhạy cảm, nên khi gợi ý ăn uống hoặc đi chơi cần ưu tiên sự thoải mái, an toàn, ít mệt.
- Nếu đề xuất món ăn, nên tránh món dễ gây khó chịu bụng hoặc quá nặng nếu không có dữ liệu chắc chắn là cô ấy hợp.
- Dị ứng cua, cần tránh cua và các món có cua/càng cua.
- Khi đau bụng hoặc mệt, nên ưu tiên cháo và các món tương tự: mềm, ấm, nhẹ bụng.
- Điều Thắm sợ nhất hiện tại: mang thai ngoài ý muốn/có bầu. Khi nhắc tới chủ đề này cần cực kỳ nhẹ nhàng, tôn trọng, không đùa cợt và không gây áp lực.

Chu kỳ kinh nguyệt:
- Mốc bắt đầu kỳ ghi nhận: 23/04/2026.
- Mốc bắt đầu kỳ ghi nhận tiếp theo: 24/05/2026.
- Chu kỳ tính từ hai mốc trên: khoảng 31 ngày.
- Nếu chu kỳ tiếp tục giống vậy, kỳ tiếp theo dự kiến khoảng 24/06/2026, có thể lệch vài ngày.
- Đây chỉ là dữ liệu theo dõi cá nhân, không dùng để kết luận y tế hoặc thay thế tư vấn bác sĩ.

Lịch trình và thời gian:
- Thường rảnh sau khi đi làm về.

Gu quán và đi chơi:
- Gu quán không quá cầu kỳ, chỉ cần món ăn ngon.
- Nơi cô ấy thích đi: nơi có bạn trai đi cùng.
- Nơi cô ấy không thích đi: nơi không có bạn trai đi cùng.
- Luật thời tiết khi hẹn hò: Thắm ghét trời quá nắng nóng (gây mệt mỏi) hoặc trời mưa (làm ướt đồ, trôi lớp trang điểm cô ấy đã chỉn chu chuẩn bị). Khi thời tiết xấu, địa điểm hẹn hò lý tưởng là các quán cà phê máy lạnh yên tĩnh, đi xem phim hoặc cùng nấu ăn tại nhà.

Những món/đồ ăn/đồ uống Thắm ghét hoặc không thích:
- Tía tô
- Vú sữa
- Bơ
- Xoài chín
- Hành
- Trà đoà/trà đào: cần xác nhận lại chính tả và ý chính xác
- Rau má
- Rau muống
- Hẹ
- Cua
- Càng cua
- Lá cuốn thịt bò
- Tàu hủ/đậu hũ

Nguyên tắc khi đưa lời khuyên:
- Không đề xuất các món Thắm ghét hoặc không thích.
- Nếu người dùng hỏi về món có thành phần chưa rõ, hãy nhắc kiểm tra thành phần trước.
- Khi phân tích lời rủ đi chơi/ăn uống, hãy cân nhắc sức khỏe, tâm trạng, mức độ phải di chuyển và việc cô ấy không thích bị ép.
- Nếu cô ấy đang giận, ưu tiên lời xin lỗi, sự quan tâm chủ động và cảm giác được yêu; không khuyên im lặng hoặc lảng tránh.
- Nếu gợi ý địa điểm, ưu tiên món ăn ngon và việc có bạn trai đi cùng hơn là địa điểm quá sang trọng.
- Nếu gợi ý quà hoặc cách làm vui, ưu tiên hoa hồng đỏ vì Thắm thích nhất là hoa hồng đỏ; vàng cũng là món cô ấy thích nhưng nên gợi ý khi dịp và ngân sách phù hợp.
- Nếu muốn mở chủ đề vui hoặc tạo bất ngờ theo sở thích giải trí, có thể gợi ý nội dung liên quan GOT7, nhưng không đoán bias nếu chưa biết.
- Có thể gợi ý chơi cầu lông nếu cô ấy khỏe và có năng lượng; nếu đang đau bụng hoặc mệt thì ưu tiên nghỉ ngơi.
- Nếu đang gần hoặc trong kỳ kinh nguyệt dự kiến, ưu tiên quan tâm nhẹ nhàng, món ấm nhẹ bụng như cháo và hạn chế rủ hoạt động mệt.
- Nếu Thắm lo lắng về việc có bầu, ưu tiên trấn an, hỏi han nhẹ nhàng, khuyên kiểm tra bằng cách phù hợp và tôn trọng quyết định của cô ấy; không đưa kết luận y tế chắc chắn.
- Vì Thắm có xu hướng tự làm mọi việc một mình và không muốn làm phiền ai, khi giúp đỡ nên chủ động nhẹ nhàng, không làm cô ấy thấy mắc nợ hoặc bị ép nhận sự giúp đỡ.
- Nếu thiếu dữ liệu, hãy nói rõ là chưa đủ thông tin thay vì đoán.
- Nếu gặp câu hỏi hoặc tình huống về việc Thắm đi chơi với nhóm toàn nam (ví dụ nhóm 6 người con trai mà chỉ có cô ấy là nữ), hãy đưa ra lời khuyên một cách khách quan, khuyến khích sự chia sẻ thẳng thắn, nhẹ nhàng giữa hai người và nhắc nhở về niềm tin, sự tôn trọng lẫn nhau thay vì phán xét hay kiểm soát cực đoan.
- Nếu thời tiết nóng hoặc mưa, khuyên anh Phong tránh rủ đi chơi ngoài trời, nên ưu tiên các địa điểm trong nhà mát mẻ, dễ chịu.
- Nếu được hỏi về cách dỗ dành khi Thắm giận, hãy dựa vào thang đo dỗ dành (3 cấp độ) để đưa ra đề xuất phù hợp với ngữ cảnh giận nhẹ hay nặng.
- Nếu được hỏi về hình phạt khi chơi game hoặc có lỗi, hãy gợi ý bộ hình phạt dễ thương tương ứng cho Phong hoặc Thắm.
- Khi người dùng hỏi "Hôm nay ăn gì?", bạn hãy đưa ra những gợi ý đa dạng để tránh trùng lặp nhàm chán. Có thể đề xuất các món Thắm thích trực tiếp (như tôm chiên bột, kẹo dẻo, trái vải) hoặc đề xuất các món ăn phổ biến khác nhưng được tùy biến an toàn cho Thắm:
  * Nhóm món sợi: Phở bò, Phở gà, Hủ tiếu Nam Vang, Bún bò Huế (nhưng BẮT BUỘC phải nhắc nhở dặn nhà hàng KHÔNG BỎ hành, hẹ, rau muống).
  * Nhóm cơm & đồ mặn: Cơm tấm sườn nướng (nhắc không lấy mỡ hành), Sushi hoặc Kimbap (nhắc tránh nhân cua/thanh cua và đậu hũ), BBQ nướng Hàn Quốc, Gà rán fastfood.
  * Nhóm lẩu/nướng: Lẩu Thái hải sản (dặn không lấy cua/ghẹ và kiểm tra rau nhúng để tránh hẹ/rau muống).
  * Món ngọt & nước: Trà sữa, sữa chua trái cây (tránh bơ, xoài chín, vú sữa, rau má).
  * Tuyệt đối không đề xuất bất kỳ món nào chứa nguyên liệu cô ấy ghét hoặc dị ứng (cua, hành, hẹ, tía tô, bơ, đậu hũ, rau má, rau muống, xoài chín, vú sữa, lá cuốn thịt bò).

Cần bổ sung thêm:
- Những chủ đề cô ấy không thích nhắc tới là gì?
- Cô ấy thích món mặn/ngọt/cay/ít cay như thế nào?
- Cô ấy có thích bất ngờ không, hay thích được báo trước?

Mục đích tạo ra:
- Tôi là bot tình yêu được tạo ra bởi anh Phong XP, mục đích là hỗ trợ phân tích và đưa ra gợi ý cho tình yêu của anh Phong và Hồng Thắm.
`;

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";
const GEMINI_MODELS = [
  "gemini-3.1-flash-lite",
  "gemini-2.5-flash-lite",
  "gemini-2.5-flash",
  "gemini-2.0-flash",
  "gemini-1.5-flash",
];
const API_KEY_PLACEHOLDER = "YOUR_API_KEY_HERE";
const PERSON_DATA_PLACEHOLDER = "[PASTE ALL INFORMATION ABOUT THE PERSON HERE]...";

const AVAILABLE_IMAGES = {
  "rose": "/images/rose.jpg",
  "got7": "/images/got7.jpg",
  "tom-chien": "/images/tom-chien.jpg",
  "tham-1": "/images/tham-1.jpg",
  "tham-2": "/images/tham-2.jpg",
  "tham-3": "/images/tham-3.jpg",
  "first-kiss": "/images/first-kiss.jpg",
  "favorite-couple": "/images/favorite-couple.jpg",
};

const SYSTEM_INSTRUCTION = `
You are a dedicated, secret personal assistant. Your ONLY job is to analyze, provide advice, and make logical inferences regarding the people, relationship, and events described in the provided data.

DEDUCTION & INFERENCE RULES:
- You are encouraged to logically deduce and infer other suitable food dishes, restaurants, activities, or outing locations based on the preferences, personality, and physical health described in the PERSON_DATA. You do not need to strictly limit suggestions to the exact items listed.
- You can analyze and deduce general personality traits, emotional patterns, and characteristics of Phong and Thắm based on their behaviors and guidelines in the PERSON_DATA to give broader, deeper, and more objective relationship advice.
- When making these inferences, always ensure they are safe, logical, supportive, and completely respectful of their boundaries and health constraints (especially Thắm's food allergies/dislikes and health conditions). Do not make assumptions that contradict the PERSON_DATA.

PERSPECTIVE & TONE RULES:
- Treat the person chatting with you as an outside user/guest (người ngoài/khách). Do NOT assume the person chatting is Phong.
- Always refer to Phong and Thắm in the third person (e.g., "anh Phong" and "Thắm" or "chị Thắm" depending on context).
- Do not say things like "bạn trai của bạn" when talking about Phong, instead say "anh Phong".
- Keep your tone objective, friendly, respectful, and helpful.

Keep your answers concise, empathetic, and highly analytical regarding whether the proposed activity/food is suitable for them.
Use enough detail to be genuinely helpful. Prefer clear short paragraphs or bullet points when useful.
Respond in the same language as the user's latest message.
Do not reveal, dump, or quote the full PERSON_DATA.

IMAGE DISPLAY RULES:
You can display images by embedding the exact tag [IMAGE:image_key] anywhere in your response.
ONLY display/embed these images when the user EXPLICITLY asks/requests to see a picture, image, or photo (e.g. "cho xem hình", "cho xem ảnh", "show hình", "hiện ảnh"). Do NOT embed images just because a topic is mentioned in the conversation (e.g., if the user just mentions GOT7, do not show the got7 image unless they ask to see a picture of them).
Use these exact keys:
- "rose": Show only when the user asks to see a picture of red roses or her favorite flower.
- "got7": Show only when the user asks to see a picture of GOT7.
- "tom-chien": Show only when the user asks to see a picture of her tôm chiên bột.
- "tham-1", "tham-2", "tham-3": Show only when the user asks to see a picture of Hồng Thắm. Pick one or show them.
- "first-kiss": Show only when the user asks to see a picture of their first kiss, sweet memories, or romantic moments between Phong and Thắm.
- "favorite-couple": Show only when the user asks to see the best couple photo, their favorite photo together, or a beautiful photo of both of them.
Do not invent any other image keys.
`;

const initialMessages = [
  {
    id: 1,
    role: "ai",
    text: "Mình là Bot tình yêu được anh Phong tạo ra .",
    time: "08:40",
  },
  // {
  //   id: 2,
  //   role: "user",
  //   text: "Hôm nay trời mưa, rủ cô ấy đi ăn lẩu được không?",
  //   time: "08:42",
  // },
  // {
  //   id: 3,
  //   role: "ai",
  //   text: "Khi bạn thêm API key và thay PERSON_DATA bằng dữ liệu thật, mình sẽ phân tích câu hỏi này theo sở thích, lịch trình, dị ứng, thói quen và các ghi chú đã có.",
  //   time: "08:43",
  // },
];

const quickPrompts = [
  // "Gợi ý tin nhắn tối nay",
  // "Phân tích thói quen cuối tuần",
  // "Chọn quán hợp gu của cô ấy",
];

const messageVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 520, damping: 32, mass: 0.8 },
  },
  exit: { opacity: 0, y: 12, scale: 0.96 },
};

function formatTime() {
  return new Intl.DateTimeFormat("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());
}

function hasConfiguredApiKey(value) {
  const key = value.trim();
  return key.length > 0 && key !== API_KEY_PLACEHOLDER;
}

function hasConfiguredPersonData() {
  const data = PERSON_DATA.trim();
  return data.length > 0 && data !== PERSON_DATA_PLACEHOLDER;
}

function buildUserContext(userPrompt) {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Ho_Chi_Minh",
  };
  const currentTimeString = new Intl.DateTimeFormat("vi-VN", options).format(now);

  return `
CURRENT_TIME_INFO:
- Thời gian hiện tại hệ thống: ${currentTimeString} (Múi giờ Việt Nam Asia/Ho_Chi_Minh)

PERSON_DATA:
"""
${PERSON_DATA.trim()}
"""

USER_QUESTION:
${userPrompt}
`;
}

function buildGeminiEndpoint(model) {
  return `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;
}

function wait(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

async function parseGeminiError(response) {
  const fallback = `Gemini API returned ${response.status}.`;
  const raw = await response.text();

  if (!raw) return fallback;

  try {
    const parsed = JSON.parse(raw);
    return parsed?.error?.message || fallback;
  } catch {
    return raw;
  }
}

function extractGeminiText(data) {
  return (
    data?.candidates?.[0]?.content?.parts
      ?.map((part) => part.text)
      .filter(Boolean)
      .join("\n")
      .trim() || ""
  );
}

function shouldTryNextModel(error) {
  const message = error.message.toLowerCase();

  return (
    [404, 429, 500, 502, 503, 504].includes(error.status) ||
    message.includes("high demand") ||
    message.includes("overloaded") ||
    message.includes("not found") ||
    message.includes("not supported") ||
    message.includes("temporarily")
  );
}

async function requestGeminiModel({ apiKey, userPrompt, model }) {
  const response = await fetch(buildGeminiEndpoint(model), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": apiKey.trim(),
    },
    body: JSON.stringify({
      system_instruction: {
        parts: [{ text: SYSTEM_INSTRUCTION.trim() }],
      },
      generationConfig: {
        temperature: 0.35,
        maxOutputTokens: 700,
      },
      contents: [
        {
          role: "user",
          parts: [{ text: buildUserContext(userPrompt) }],
        },
      ],
    }),
  });

  if (!response.ok) {
    const error = new Error(await parseGeminiError(response));
    error.status = response.status;
    error.model = model;
    throw error;
  }

  const data = await response.json();
  const text = extractGeminiText(data);

  if (!text) {
    const blockReason = data?.promptFeedback?.blockReason;
    throw new Error(
      blockReason
        ? `Gemini blocked this request: ${blockReason}.`
        : "Gemini did not return a text response.",
    );
  }

  return { text, model };
}

async function askGemini({ apiKey, userPrompt }) {
  const errors = [];

  for (const [index, model] of GEMINI_MODELS.entries()) {
    try {
      return await requestGeminiModel({ apiKey, userPrompt, model });
    } catch (error) {
      errors.push(`${model}: ${error.message}`);

      if (!shouldTryNextModel(error) || index === GEMINI_MODELS.length - 1) {
        throw new Error(`Không gọi được Gemini sau khi thử ${errors.length} model.\n${errors.join("\n")}`);
      }

      await wait(650 * (index + 1));
    }
  }

  throw new Error("Không có model Gemini khả dụng lúc này.");
}

function TypingIndicator() {
  return (
    <motion.div
      className="flex items-center gap-2 rounded-[22px] border border-white/[0.45] bg-white/80 px-4 py-3 shadow-[0_14px_40px_rgba(93,35,121,0.18)] backdrop-blur-2xl"
      variants={messageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-fuchsia-500 to-orange-400 text-white shadow-lg shadow-fuchsia-500/25">
        <Sparkles size={15} />
      </span>
      <span className="flex h-5 items-end gap-1.5">
        {[0, 1, 2].map((dot) => (
          <motion.span
            key={dot}
            className="h-2 w-2 rounded-full bg-fuchsia-500"
            animate={{ y: [0, -7, 0], opacity: [0.45, 1, 0.45] }}
            transition={{
              duration: 0.75,
              repeat: Infinity,
              ease: "easeInOut",
              delay: dot * 0.14,
            }}
          />
        ))}
      </span>
    </motion.div>
  );
}

function MessageText({ text, isUser, onImageClick }) {
  if (isUser) {
    return <span className="block max-w-full min-w-0 whitespace-pre-wrap break-words [overflow-wrap:anywhere]">{text}</span>;
  }

  const imageRegex = /\[IMAGE:\s*([\w-]+)\s*\]/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = imageRegex.exec(text)) !== null) {
    const textBefore = text.slice(lastIndex, match.index);
    if (textBefore) {
      parts.push({ type: "text", content: textBefore });
    }
    parts.push({ type: "image", key: match[1] });
    lastIndex = imageRegex.lastIndex;
  }

  const textAfter = text.slice(lastIndex);
  if (textAfter) {
    parts.push({ type: "text", content: textAfter });
  }

  return (
    <div className="max-w-full min-w-0 space-y-3">
      {parts.map((part, index) => {
        if (part.type === "image") {
          const src = AVAILABLE_IMAGES[part.key];
          if (!src) return null;
          return (
            <div
              key={index}
              onClick={() => onImageClick && onImageClick(src)}
              className="my-2 max-w-sm overflow-hidden rounded-xl border border-white/20 shadow-md cursor-zoom-in"
            >
              <img
                src={src}
                alt={part.key}
                className="max-h-60 w-full object-cover transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          );
        }

        const lines = part.content
          .split(/\n+/)
          .map((line) => line.trim())
          .filter(Boolean);

        return (
          <div key={index} className="space-y-2">
            {lines.map((line, lineIndex) => {
              const isBullet = /^[-*•]\s+/.test(line);
              const content = line.replace(/^[-*•]\s+/, "");

              if (isBullet) {
                return (
                  <p key={`${content}-${lineIndex}`} className="flex max-w-full min-w-0 gap-2.5">
                    <span className="mt-[0.62em] h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-500/80" />
                    <span className="min-w-0 break-words [overflow-wrap:anywhere]">{content}</span>
                  </p>
                );
              }

              return (
                <p key={`${content}-${lineIndex}`} className="max-w-full min-w-0 break-words [overflow-wrap:anywhere]">
                  {content}
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

function MessageBubble({ message, onImageClick }) {
  const isUser = message.role === "user";
  const aiClass = message.isError
    ? "w-fit max-w-full min-w-0 overflow-x-hidden rounded-[22px] rounded-bl-md border border-rose-200/80 bg-rose-50/90 px-4 py-3 text-[14px] leading-6 text-rose-950 shadow-[0_18px_48px_rgba(88,28,135,0.16)] backdrop-blur-2xl sm:px-5 sm:text-[15px]"
    : "w-fit max-w-full min-w-0 overflow-x-hidden rounded-[22px] rounded-bl-md border border-white/70 bg-white/85 px-4 py-3 text-[14px] leading-6 text-slate-800 shadow-[0_18px_48px_rgba(88,28,135,0.16)] ring-1 ring-purple-950/5 backdrop-blur-2xl sm:px-5 sm:text-[15px]";

  return (
    <motion.div
      layout
      variants={messageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`flex w-full max-w-full min-w-0 items-end gap-2 overflow-x-hidden sm:gap-3 ${isUser ? "justify-end" : "justify-start"
        }`}
    >
      {!isUser && (
        <div className="mb-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/[0.55] bg-white/60 text-fuchsia-700 shadow-lg shadow-fuchsia-900/10 backdrop-blur-xl sm:h-9 sm:w-9">
          {message.isError ? <AlertCircle size={18} /> : <Bot size={18} />}
        </div>
      )}

      <div
        className={`flex min-w-0 max-w-[calc(100%-2.5rem)] flex-col gap-1.5 overflow-x-hidden sm:max-w-[74%] lg:max-w-[66%] ${isUser ? "items-end" : "items-start"
          }`}
      >
        <div
          className={
            isUser
              ? "w-fit max-w-full min-w-0 overflow-x-hidden rounded-[22px] rounded-br-md bg-gradient-to-br from-fuchsia-500 via-pink-500 to-orange-400 px-4 py-3 text-[14px] leading-6 text-white shadow-[0_18px_46px_rgba(236,72,153,0.34)] sm:px-5 sm:text-[15px]"
              : aiClass
          }
        >
          <MessageText text={message.text} isUser={isUser} onImageClick={onImageClick} />
        </div>
        <span
          className={`px-2 text-[11px] font-medium ${isUser ? "text-white/[0.72]" : "text-purple-950/[0.45]"
            }`}
        >
          {message.time}
        </span>
      </div>

      {isUser && (
        <div className="mb-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-orange-300 to-pink-500 text-white shadow-lg shadow-pink-700/20 sm:h-9 sm:w-9">
          <UserRound size={18} />
        </div>
      )}
    </motion.div>
  );
}

export default function PersonalAssistantChat() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [apiKey, setApiKey] = useState(API_KEY);
  const [activeModel, setActiveModel] = useState(GEMINI_MODELS[0]);
  const [isTyping, setIsTyping] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const listRef = useRef(null);

  const dataStatus = hasConfiguredPersonData() ? "ready" : "missing";
  const apiStatus = hasConfiguredApiKey(apiKey) ? "ready" : "missing";

  const currentStatus = useMemo(
    () => [
      { label: "Model", value: activeModel.replace("gemini-", "") },
      { label: "Nguồn", value: "PERSON_DATA" },
      { label: "Chế độ", value: "strict" },
    ],
    [activeModel],
  );

  useEffect(() => {
    scrollToLatestMessage();
  }, [messages, isTyping]);

  function appendAssistantMessage(text, isError = false) {
    setMessages((current) => [
      ...current,
      {
        id: Date.now() + Math.random(),
        role: "ai",
        text,
        time: formatTime(),
        isError,
      },
    ]);
  }

  function scrollToLatestMessage(behavior = "smooth") {
    window.setTimeout(() => {
      const list = listRef.current;

      if (!list) return;

      list.scrollTo({
        top: list.scrollHeight,
        behavior,
      });
    }, 40);
  }

  async function sendMessage(text = input) {
    const nextText = text.trim();
    if (!nextText || isTyping) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      text: nextText,
      time: formatTime(),
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setIsTyping(true);
    scrollToLatestMessage();

    try {
      if (!hasConfiguredApiKey(apiKey)) {
        throw new Error("Vui lòng nhập Gemini API key hoặc thay API_KEY trong file.");
      }

      if (!hasConfiguredPersonData()) {
        throw new Error("Vui lòng thay PERSON_DATA bằng dữ liệu thật trước khi hỏi.");
      }

      const answer = await askGemini({
        apiKey,
        userPrompt: nextText,
      });
      setActiveModel(answer.model);
      appendAssistantMessage(answer.text);
    } catch (error) {
      appendAssistantMessage(
        `Xin lỗi, mình chưa thể phân tích lúc này. ${error.message}`,
        true,
      );
    } finally {
      setIsTyping(false);
      scrollToLatestMessage();
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendMessage();
  }

  return (
    <main className="relative min-h-dvh w-full max-w-[100dvw] overflow-hidden bg-[#21002f] px-2 py-2 text-slate-950 sm:px-6 sm:py-8">
      <style>{`
        @keyframes mesh-drift {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); filter: hue-rotate(0deg); }
          33% { transform: translate3d(3%, -4%, 0) scale(1.08); filter: hue-rotate(12deg); }
          66% { transform: translate3d(-4%, 3%, 0) scale(1.04); filter: hue-rotate(-10deg); }
        }

        @keyframes halo-pulse {
          0%, 100% { opacity: 0.42; transform: scale(0.94); }
          50% { opacity: 0.72; transform: scale(1.08); }
        }

        .mesh-orchestra {
          background:
            radial-gradient(circle at 18% 18%, rgba(255, 183, 77, 0.92) 0 18%, transparent 38%),
            radial-gradient(circle at 80% 12%, rgba(255, 43, 134, 0.86) 0 20%, transparent 39%),
            radial-gradient(circle at 52% 48%, rgba(216, 42, 255, 0.74) 0 22%, transparent 44%),
            radial-gradient(circle at 18% 86%, rgba(255, 107, 66, 0.82) 0 23%, transparent 42%),
            radial-gradient(circle at 88% 82%, rgba(83, 20, 141, 0.92) 0 24%, transparent 45%),
            linear-gradient(135deg, #ff8a3d 0%, #ff2d95 39%, #a51cff 70%, #2a064b 100%);
          animation: mesh-drift 14s ease-in-out infinite;
        }

        .noise-lift {
          background-image:
            linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 46px 46px;
          mask-image: radial-gradient(circle at center, black, transparent 78%);
        }
      `}</style>

      <div className="mesh-orchestra absolute -inset-20 max-w-[120dvw]" />
      <div className="noise-lift absolute inset-0 max-w-full opacity-[0.35]" />
      <div className="absolute inset-x-0 top-0 h-36 max-w-full bg-gradient-to-b from-white/[0.24] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-44 max-w-full bg-gradient-to-t from-purple-950/[0.55] to-transparent" />

      <motion.section
        initial={{ opacity: 0, y: 42, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.78, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto flex h-[calc(100dvh-1rem)] w-full max-w-full min-h-0 min-w-0 flex-col overflow-hidden rounded-[22px] border border-white/30 bg-white/[0.18] shadow-[0_32px_100px_rgba(42,6,75,0.42)] backdrop-blur-3xl sm:h-[calc(100dvh-4rem)] sm:max-w-5xl sm:rounded-[38px]"
      >
        <header className="sticky top-0 z-20 shrink-0 border-b border-white/25 bg-white/20 px-3 py-3 backdrop-blur-2xl sm:px-6 sm:py-4">
          <div className="flex min-w-0 items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3">
              <div className="relative grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-orange-300 via-pink-500 to-fuchsia-600 text-white shadow-[0_0_34px_rgba(236,72,153,0.74)] sm:h-12 sm:w-12">
                <span
                  className="absolute inset-0 rounded-2xl bg-pink-400/50 blur-xl"
                  style={{ animation: "halo-pulse 2.2s ease-in-out infinite" }}
                />
                <Sparkles className="relative" size={23} />
                <span className="absolute -right-1 -top-1 flex h-4 w-4">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
                  <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-white bg-emerald-400" />
                </span>
              </div>
              <div className="min-w-0">
                <h1 className="truncate text-base font-bold tracking-normal text-white drop-shadow sm:text-2xl">
                  Trợ lý Phân tích Sở thích
                </h1>
                <p className="truncate text-xs font-medium text-white/[0.72] sm:text-sm">
                  Chỉ phân tích dựa trên dữ liệu cá nhân đã cung cấp
                </p>
              </div>
            </div>

            <div className="hidden items-center gap-2 md:flex">
              {currentStatus.map((item) => (
                <div
                  key={item.label}
                  className="rounded-full border border-white/30 bg-white/[0.18] px-3 py-2 text-right text-white shadow-sm backdrop-blur-xl"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/[0.55]">
                    {item.label}
                  </p>
                  <p className="text-sm font-bold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </header>



        <div ref={listRef} className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden overscroll-contain px-3 py-4 scroll-pb-6 sm:px-6 sm:py-7">
          <div className="flex min-w-0 flex-col gap-4 pb-5 sm:gap-5 sm:pb-6">
            <AnimatePresence initial={false}>
              {messages.map((message) => (
                <MessageBubble key={message.id} message={message} onImageClick={setSelectedImage} />
              ))}

              {isTyping && (
                <motion.div key="typing" className="flex justify-start">
                  <TypingIndicator />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="shrink-0 border-t border-white/20 bg-white/[0.15] px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-2.5 backdrop-blur-2xl sm:px-6 sm:pb-6 sm:pt-3">
          {quickPrompts.length > 0 && (
            <div className="mb-3 flex max-w-full gap-2 overflow-x-auto overflow-y-hidden pb-1">
              {quickPrompts.map((prompt) => (
                <motion.button
                  key={prompt}
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => sendMessage(prompt)}
                  disabled={isTyping}
                  className="shrink-0 rounded-full border border-white/30 bg-white/[0.18] px-3.5 py-2 text-xs font-semibold text-white shadow-sm backdrop-blur-xl transition disabled:cursor-not-allowed disabled:opacity-50 sm:px-4 sm:text-sm"
                >
                  {prompt}
                </motion.button>
              ))}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 rounded-full border border-white/40 bg-white/[0.78] p-1.5 shadow-[0_18px_60px_rgba(42,6,75,0.25)] backdrop-blur-2xl sm:p-2"
          >
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              disabled={isTyping}
              placeholder={isTyping ? "Đang phân tích..." : "Hỏi về sở thích, lịch hẹn, thói quen..."}
              className="min-w-0 flex-1 bg-transparent px-3 text-base font-medium text-slate-900 outline-none placeholder:text-slate-500 disabled:cursor-not-allowed sm:px-5"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={!input.trim() || isTyping}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-fuchsia-500 via-pink-500 to-orange-400 text-white shadow-[0_0_28px_rgba(236,72,153,0.62)] transition disabled:cursor-not-allowed disabled:grayscale sm:h-12 sm:w-12"
              aria-label="Gửi tin nhắn"
            >
              <Send size={20} />
            </motion.button>
          </form>
        </div>
      </motion.section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4 backdrop-blur-md cursor-zoom-out"
          >
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white/80 hover:bg-white/20 hover:text-white transition"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              src={selectedImage}
              alt="Enlarged view"
              className="max-h-[90vh] max-w-full rounded-2xl object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  Bot,
  Send,
  Sparkles,
  UserRound,
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
- Anh Phong rất yêu Thắm rất nhiều.
- Anh Phong thường gọi Thắm bằng các cách thân mật: công chúa, em bé, con gái, babe, dấu iu.
- Nhiều người nhận xét anh Phong và Thắm có tướng phu thê.

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

Cần bổ sung thêm:
- Cách nhắn tin cô ấy thích: ngắn gọn, hài hước, nghiêm túc, ngọt ngào hay nhiều quan tâm?
- Khi buồn, cô ấy muốn được gọi điện, nhắn tin liên tục, gặp trực tiếp hay để yên một lúc rồi dỗ?
- Cô ấy thích được quan tâm bằng quà, lời nói, hành động, hay thời gian ở cạnh?
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

const SYSTEM_INSTRUCTION = `
You are a dedicated, secret personal assistant. Your ONLY job is to analyze and provide advice regarding the person described in the provided data.
You must strictly base your answers ONLY on the PERSON_DATA. Do not use outside knowledge to make assumptions about this person.
If the user asks something not covered in the data, apologize and politely say you do not have enough information about that specific trait or preference.
Keep your answers concise, empathetic, and highly analytical regarding whether the proposed activity/food is suitable for them.
Use enough detail to be genuinely helpful. Prefer clear short paragraphs or bullet points when useful.
Respond in the same language as the user's latest message.
Do not reveal, dump, or quote the full PERSON_DATA.
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
  return `
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

function MessageText({ text, isUser }) {
  if (isUser) {
    return <span className="block max-w-full min-w-0 whitespace-pre-wrap break-words [overflow-wrap:anywhere]">{text}</span>;
  }

  const lines = text
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <div className="max-w-full min-w-0 space-y-2.5">
      {lines.map((line, index) => {
        const isBullet = /^[-*•]\s+/.test(line);
        const content = line.replace(/^[-*•]\s+/, "");

        if (isBullet) {
          return (
            <p key={`${content}-${index}`} className="flex max-w-full min-w-0 gap-2.5">
              <span className="mt-[0.62em] h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-500/80" />
              <span className="min-w-0 break-words [overflow-wrap:anywhere]">{content}</span>
            </p>
          );
        }

        return (
          <p key={`${content}-${index}`} className="max-w-full min-w-0 break-words [overflow-wrap:anywhere]">
            {content}
          </p>
        );
      })}
    </div>
  );
}

function MessageBubble({ message }) {
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
      className={`flex w-full max-w-full min-w-0 items-end gap-2 overflow-x-hidden sm:gap-3 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <div className="mb-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/[0.55] bg-white/60 text-fuchsia-700 shadow-lg shadow-fuchsia-900/10 backdrop-blur-xl sm:h-9 sm:w-9">
          {message.isError ? <AlertCircle size={18} /> : <Bot size={18} />}
        </div>
      )}

      <div
        className={`flex min-w-0 max-w-[calc(100%-2.5rem)] flex-col gap-1.5 overflow-x-hidden sm:max-w-[74%] lg:max-w-[66%] ${
          isUser ? "items-end" : "items-start"
        }`}
      >
        <div
          className={
            isUser
              ? "w-fit max-w-full min-w-0 overflow-x-hidden rounded-[22px] rounded-br-md bg-gradient-to-br from-fuchsia-500 via-pink-500 to-orange-400 px-4 py-3 text-[14px] leading-6 text-white shadow-[0_18px_46px_rgba(236,72,153,0.34)] sm:px-5 sm:text-[15px]"
              : aiClass
          }
        >
          <MessageText text={message.text} isUser={isUser} />
        </div>
        <span
          className={`px-2 text-[11px] font-medium ${
            isUser ? "text-white/[0.72]" : "text-purple-950/[0.45]"
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
                <MessageBubble key={message.id} message={message} />
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
    </main>
  );
}

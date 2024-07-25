
// import { Button } from "@/components/ui/button"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
// import { Input } from "@/components/ui/input"

// export default function Chatbox() {
//   return (
//     <div className="flex flex-col h-[500px]  rounded-md border bg-background">
//       <div className="flex items-center justify-between p-4 border-b bg-background">
//         <h2 className="text-lg font-semibold text-foreground">Chat</h2>
//         <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
//           <MoveHorizontalIcon className="w-4 h-4" />
//         </Button>
//       </div>
//       <ScrollArea className="flex-1 overflow-y-auto p-4">
//         <div className="flex flex-col gap-4">
//           <div className="flex items-start gap-2">
//             <Avatar className="w-8 h-8 border">
//               <AvatarImage src="/placeholder-user.jpg" />
//               <AvatarFallback>JD</AvatarFallback>
//             </Avatar>
//             <div className="grid gap-1">
//               <div className="font-medium text-foreground">John Doe</div>
//               <div className="text-sm text-muted-foreground">Hello, how can I assist you today?</div>
//             </div>
//           </div>
//           <div className="flex items-start gap-2">
//             <Avatar className="w-8 h-8 border">
//               <AvatarImage src="/placeholder-user.jpg" />
//               <AvatarFallback>YO</AvatarFallback>
//             </Avatar>
//             <div className="grid gap-1">
//               <div className="font-medium text-foreground">You</div>
//               <div className="text-sm text-muted-foreground">Hi, I have a question about your product pricing.</div>
//             </div>
//           </div>
//         </div>
//       </ScrollArea>
//       <div className="p-4 border-t bg-background">
//         <div className="flex gap-2">
//           <Input placeholder="Type your message..." className="flex-1" />
//           <Button>Send</Button>
//         </div>
//       </div>
//     </div>
//   )
// }

// function MoveHorizontalIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polyline points="18 8 22 12 18 16" />
//       <polyline points="6 8 2 12 6 16" />
//       <line x1="2" x2="22" y1="12" y2="12" />
//     </svg>
//   )
// }


// function XIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M18 6 6 18" />
//       <path d="m6 6 12 12" />
//     </svg>
//   )
// }

// import React, { useState } from 'react';
// import { Button } from "@/components/ui/button";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// import { Input } from "@/components/ui/input";
// import { cn } from "@/lib/utils"; // Assuming you have a utility for classNames

// export default function Chatbox() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleChatbox = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <div className={cn(
//         "fixed bottom-4 right-4 transition-transform",
//         isOpen ? "transform translate-y-0" : "transform translate-y-full"
//       )}>
//         <div className="flex flex-col h-[700px] w-[500px] rounded-md border bg-background shadow-lg">
//           <div className="flex items-center justify-between p-4 border-b bg-background">
//             <h2 className="text-lg font-semibold text-foreground">Chat</h2>
//             <Button 
//               variant="ghost" 
//               size="icon" 
//               className="text-muted-foreground hover:text-foreground"
//               onClick={toggleChatbox}
//             >
//               <XIcon className="w-4 h-4" />
//             </Button>
//           </div>
//           <ScrollArea className="flex-1 overflow-y-auto p-4">
//             <div className="flex flex-col gap-4">
//               {/* Add your messages here */}
//               <div className="flex items-start gap-2">
//                 <Avatar className="w-8 h-8 border">
//                   <AvatarImage src="/placeholder-user.jpg" />
//                   <AvatarFallback>JD</AvatarFallback>
//                 </Avatar>
//                 <div className="grid gap-1">
//                   <div className="font-medium text-foreground">John Doe</div>
//                   <div className="text-sm text-muted-foreground">Hello, how can I assist you today?</div>
//                 </div>
//               </div>
//               <div className="flex items-start gap-2">
//                 <Avatar className="w-8 h-8 border">
//                   <AvatarImage src="/placeholder-user.jpg" />
//                   <AvatarFallback>YO</AvatarFallback>
//                 </Avatar>
//                 <div className="grid gap-1">
//                   <div className="font-medium text-foreground">You</div>
//                   <div className="text-sm text-muted-foreground">Hi, I have a question about your product pricing.</div>
//                 </div>
//               </div>
//             </div>
//           </ScrollArea>
//           <div className="p-4 border-t bg-background">
//             <div className="flex gap-2">
//               <Input placeholder="Type your message..." className="flex-1" />
//               <Button>Send</Button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="fixed bottom-4 right-4">
//         <Button 
//           variant="primary" 
//           className="rounded-full p-4 shadow-lg"
//           onClick={toggleChatbox}
//         >
//           <ChatIcon className="w-6 h-6" />
//         </Button>
//       </div>
//     </>
//   );
// }

// function ChatIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="12" r="10" />
//       <line x1="15" x2="9" y1="15" y2="9" />
//       <line x1="9" x2="15" y1="15" y2="9" />
//     </svg>
//   );
// }

// function XIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M18 6 6 18" />
//       <path d="m6 6 12 12" />
//     </svg>
//   );
// }



// import React, { useState, useEffect } from 'react';
// import { Button } from "@/components/ui/button";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// import { Input } from "@/components/ui/input";
// import { cn } from "@/lib/utils";

// export default function Chatbox() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleChatbox = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
//     script.type = 'module';
//     document.body.appendChild(script);
//   }, []);

//   return (
//     <>
//       <div className={cn(
//         "fixed bottom-20 right-20 transition-transform",
//         isOpen ? "transform translate-y-0 opacity-100" : "transform translate-y-full opacity-0"
//       )}>
//         <div className="flex flex-col h-[500px] w-[400px] rounded-xl border bg-background shadow-lg transition-transform">
//           <div className="flex items-center justify-between p-2 bg-background">
//             <h2 className="text-lg font-semibold text-foreground"></h2>
//             <Button 
//               variant="ghost" 
//               size="icon" 
//               className="text-muted-foreground hover:text-foreground"
//               onClick={toggleChatbox}
//             >
//               <XIcon className="w-4 h-4" />
//             </Button>
//           </div>
//           <ScrollArea className="flex-1 overflow-y-auto p-4">
//             <div className="flex flex-col gap-4">
//               <div className="flex items-start gap-2">
//                 <Avatar className="w-8 h-8 border">
//                   <AvatarImage src="https://res.cloudinary.com/dngvge2sb/image/upload/v1721889453/Screenshot_2024-07-25_120517_vsvonk.png" />
//                   <AvatarFallback>JD</AvatarFallback>
//                 </Avatar>
//                 <div className="grid gap-1">
//                   <div className="font-medium text-foreground">HealR.ai</div>
//                   <div className="text-sm text-muted-foreground">Hello, how can I assist you today?</div>
//                 </div>
//               </div>
//               <div className="flex items-start gap-2">
//                 <Avatar className="w-8 h-8 border">
//                   <AvatarImage src="/placeholder-user.jpg" />
//                   <AvatarFallback>YO</AvatarFallback>
//                 </Avatar>
//                 <div className="grid gap-1">
//                   <div className="font-medium text-foreground">You</div>
//                   <div className="text-sm text-muted-foreground">Hi, I have a question about your product pricing.</div>
//                 </div>
//               </div>
//             </div>
//           </ScrollArea>
//           <div className="p-4 bg-background">
//   <div className="flex items-center gap-2 relative  ">
//     <textarea 
//       className="border-input px-3 py-2  text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 w-full border rounded-full flex items-center h-9 resize-none overflow-hidden bg-background pr-10" 
//       placeholder="Type your message here.."
//     ></textarea>
//     <Button>Send</Button>
//   </div>
// </div>

//         </div>
//       </div>
//       <div className="fixed bottom-4 right-4">
//         <Button 
//               variant="ghost" 
//               size="icon" 
//               className="transparent hover:text-foreground"
//               onClick={toggleChatbox}
//               style={{ width: '100px', height: '100px' }} 
//             >
//               <dotlottie-player 
//                 src="https://lottie.host/02bd7a2c-e5cc-4978-9a24-b606f668cfe6/Pfm9RRaccV.json" 
//                 background="transparent" 
//                 speed="1" 
//                 style={{ width: "100px", height: "100px" }} 
//                 loop 
//                 autoplay
//               ></dotlottie-player>
//             </Button>
//       </div>
//     </>
//   );
// }

// function ChatIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="12" r="10" />
//       <line x1="15" x2="9" y1="15" y2="9" />
//       <line x1="9" x2="15" y1="15" y2="9" />
//     </svg>
//   );
// }

// function XIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M18 6 6 18" />
//       <path d="m6 6 12 12" />
//     </svg>
//   );
// }

// --------------------------------------------------------------------------------------------------

// import React, { useState, useEffect } from 'react';
// import { Button } from "@/components/ui/button";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// import { cn } from "@/lib/utils";
// import {
//     GoogleGenerativeAI,
//     HarmBlockThreshold,
//     HarmCategory,
//   } from "@google/generative-ai";


// export default function Chatbox() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [geminiModel, setGeminiModel] = useState(null);

//   useEffect(() => {
//     const generateAI = new GoogleGenerativeAI(AIzaSyBvJ_HOwXk_NHPvXtjK0o0MvLajFnqAm0U);
//     const model = generateAI.getGenerativeModel({ model: 'gemini-1.5-flash'});
//     setGeminiModel(model);
//   }, []);

//   const toggleChatbox = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleInputChange = (e) => {
//     setInput(e.target.value);
//   };

//   const sendMessage = async (message) => {
//     if (!geminiModel) return;

//     setLoading(true);

//     try {
//       const prompt = `You: ${message}`;
//       const response = await geminiModel.generateText({ prompt });
//       const chatbotResponse = response.text[0];

//       setMessages(prevMessages => [
//         ...prevMessages,
//         { text: message, sender: 'user' },
//         { text: chatbotResponse, sender: 'bot' }
//       ]);
//       setInput('');
//     } catch (error) {
//       console.error('Error sending message:', error.message);
//     }

//     setLoading(false);
//   };

//   const handleSendMessage = () => {
//     if (input.trim() === '') return;
//     sendMessage(input);
//   };

//   const handleUserInput = (event) => {
//     if (event.key === 'Enter') {
//       event.preventDefault();
//       handleSendMessage();
//     }
//   };

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
//     script.type = 'module';
//     document.body.appendChild(script);
//   }, []);

//   return (
//     <>
//       <div className={cn(
//         "fixed bottom-20 right-20 transition-transform",
//         isOpen ? "transform translate-y-0 opacity-100" : "transform translate-y-full opacity-0"
//       )}>
//         <div className="flex flex-col h-[500px] w-[400px] rounded-xl border bg-background shadow-lg transition-transform">
//           <div className="flex items-center justify-between p-2 bg-background">
//             <h2 className="text-lg font-semibold text-foreground">Chat</h2>
//             <Button 
//               variant="ghost" 
//               size="icon" 
//               className="text-muted-foreground hover:text-foreground"
//               onClick={toggleChatbox}
//             >
//               <XIcon className="w-4 h-4" />
//             </Button>
//           </div>
//           <ScrollArea className="flex-1 overflow-y-auto p-4">
//             <div className="flex flex-col gap-4">
//               {messages.map((msg, index) => (
//                 <div key={index} className={`flex items-start gap-2 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
//                   {msg.sender === 'bot' ? (
//                     <Avatar className="w-8 h-8 border">
//                       <AvatarImage src="https://res.cloudinary.com/dngvge2sb/image/upload/v1721889453/Screenshot_2024-07-25_120517_vsvonk.png" />
//                       <AvatarFallback>JD</AvatarFallback>
//                     </Avatar>
//                   ) : (
//                     <Avatar className="w-8 h-8 border">
//                       <AvatarImage src="/placeholder-user.jpg" />
//                       <AvatarFallback>YO</AvatarFallback>
//                     </Avatar>
//                   )}
//                   <div className="grid gap-1">
//                     <div className={`font-medium text-foreground ${msg.sender === 'user' ? 'text-blue-600' : ''}`}>{msg.sender === 'user' ? 'You' : 'HealR.ai'}</div>
//                     <div className="text-sm text-muted-foreground">{msg.text}</div>
//                   </div>
//                 </div>
//               ))}
//               {loading && <div className="text-muted-foreground">...Typing</div>}
//             </div>
//           </ScrollArea>
//           <div className="p-4 bg-background">
//             <div className="flex items-center gap-2 relative">
//               <textarea 
//                 value={input}
//                 onChange={handleInputChange}
//                 onKeyDown={handleUserInput}
//                 className="border-input px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 w-full border rounded-full resize-none overflow-hidden bg-background pr-10"
//                 placeholder="Type your message here.."
//               ></textarea>
//               <Button onClick={handleSendMessage} disabled={loading}>Send</Button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="fixed bottom-4 right-4">
//         <Button 
//           variant="ghost" 
//           size="icon" 
//           className="transparent hover:text-foreground"
//           onClick={toggleChatbox}
//           style={{ width: '100px', height: '100px' }}
//         >
//           <dotlottie-player 
//             src="https://lottie.host/02bd7a2c-e5cc-4978-9a24-b606f668cfe6/Pfm9RRaccV.json" 
//             background="transparent" 
//             speed="1" 
//             style={{ width: "100px", height: "100px" }} 
//             loop 
//             autoplay
//           ></dotlottie-player>
//         </Button>
//       </div>
//     </>
//   );
// }


// ===================================================================================================

// import React, { useState, useEffect } from 'react';
// import { Button } from "@/components/ui/button";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// import { cn } from "@/lib/utils";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// // Ensure environment variable for API key
// const AI_API_KEY = 'AIzaSyBvJ_HOwXk_NHPvXtjK0o0MvLajFnqAm0U';

// export default function Chatbox() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [chatHistory, setChatHistory] = useState([]);
//   const [userInput, setUserInput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [geminiModel, setGeminiModel] = useState(null);

//   // Initialize Gemini API
//   useEffect(() => {
//     const genAI = new GoogleGenerativeAI(AI_API_KEY);
//     const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
//     setGeminiModel(model);
//   }, []);

//   const toggleChatbox = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleUserInput = (e) => {
//     setUserInput(e.target.value);
//   };

//   const sendMessage = async () => {
//     if (!geminiModel || userInput.trim() === '') return;

//     setIsLoading(true);

//     try {
//       const result = await geminiModel.generateContent(userInput);
//       const response = result.response; // Adjust based on the actual response structure
//       console.log(response);

//       setChatHistory([
//         ...chatHistory,
//         { type: 'user', message: userInput },
//         { type: 'bot', message: response.text() },
//       ]);
//     } catch (error) {
//       console.error('Error sending message:', error.message);
//     } finally {
//       setUserInput('');
//       setIsLoading(false);
//     }
//   };

//   const handleEnterKey = (event) => {
//     if (event.key === 'Enter') {
//       event.preventDefault();
//       sendMessage();
//     }
//   };

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
//     script.type = 'module';
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <>
//       <div className={cn(
//         "fixed bottom-20 right-20 transition-transform",
//         isOpen ? "transform translate-y-0 opacity-100" : "transform translate-y-full opacity-0"
//       )}>
//         <div className="flex flex-col h-[500px] w-[400px] rounded-xl border bg-background shadow-lg transition-transform">
//           <div className="flex items-center justify-between p-2 bg-background">
//             <h2 className="text-lg font-semibold text-foreground">Chat</h2>
//             <Button 
//               variant="ghost" 
//               size="icon" 
//               className="text-muted-foreground hover:text-foreground"
//               onClick={toggleChatbox}
//             >
//               <XIcon className="w-4 h-4" />
//             </Button>
//           </div>
//           <ScrollArea className="flex-1 overflow-y-auto p-4">
//             <div className="flex flex-col gap-4">
//               {chatHistory.map((msg, index) => (
//                 <div key={index} className={`flex items-start gap-2 ${msg.type === 'user' ? 'justify-end' : ''}`}>
//                   {msg.type === 'bot' ? (
//                     <Avatar className="w-8 h-8 border">
//                       <AvatarImage src="https://res.cloudinary.com/dngvge2sb/image/upload/v1721889453/Screenshot_2024-07-25_120517_vsvonk.png" />
//                       <AvatarFallback>JD</AvatarFallback>
//                     </Avatar>
//                   ) : (
//                     <Avatar className="w-8 h-8 border">
//                       <AvatarImage src="/placeholder-user.jpg" />
//                       <AvatarFallback>YO</AvatarFallback>
//                     </Avatar>
//                   )}
//                   <div className="grid gap-1">
//                     <div className={`font-medium text-foreground ${msg.type === 'user' ? 'text-blue-600' : ''}`}>
//                       {msg.type === 'user' ? 'You' : 'HealR.ai'}
//                     </div>
//                     <div className="text-sm text-muted-foreground">{msg.message}</div>
//                   </div>
//                 </div>
//               ))}
//               {isLoading && <div className="text-muted-foreground">...Typing</div>}
//             </div>
//           </ScrollArea>
//           <div className="p-4 bg-background">
//             <div className="flex items-center gap-2 relative">
//               <textarea 
//                 value={userInput}
//                 onChange={handleUserInput}
//                 onKeyDown={handleEnterKey}
//                 className="border-input px-3 py-2  text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 w-full border rounded-full flex items-center h-9 resize-none overflow-hidden bg-background pr-10" 
//                 placeholder="Type your message here.."
//               ></textarea>
//               <Button onClick={sendMessage} disabled={isLoading}>Send</Button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="fixed bottom-4 right-4">
//         <Button 
//           variant="ghost" 
//           size="icon" 
//           className="transparent hover:text-foreground"
//           onClick={toggleChatbox}
//           style={{ width: '100px', height: '100px' }}
//         >
//           <dotlottie-player 
//             src="https://lottie.host/02bd7a2c-e5cc-4978-9a24-b606f668cfe6/Pfm9RRaccV.json" 
//             background="transparent" 
//             speed="1" 
//             style={{ width: "100px", height: "100px" }} 
//             loop 
//             autoplay
//           ></dotlottie-player>
//         </Button>
//       </div>
//     </>
//   );
// }

// function XIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M18 6 6 18" />
//       <path d="m6 6 12 12" />
//     </svg>
//   );
// }


import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from 'react-markdown';

// Ensure environment variable for API key
const AI_API_KEY = 'AIzaSyBvJ_HOwXk_NHPvXtjK0o0MvLajFnqAm0U';

export default function Chatbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    { type: 'bot', message: 'Hey, how can I assist you today?' }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [geminiModel, setGeminiModel] = useState(null);

  // Initialize Gemini API
  useEffect(() => {
    const genAI = new GoogleGenerativeAI(AI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    setGeminiModel(model);
  }, []);

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const sendMessage = async () => {
    if (!geminiModel || userInput.trim() === '') return;

    setIsLoading(true);

    try {
      const result = await geminiModel.generateContent(userInput);
      const response = result.response; // Adjust based on the actual response structure
      console.log(response);

      setChatHistory([
        ...chatHistory,
        { type: 'user', message: userInput },
        { type: 'bot', message: response.text().replace(/"([^"]*)"/g, '*"$1"*') },
      ]);
    } catch (error) {
      console.error('Error sending message:', error.message);
    } finally {
      setUserInput('');
      setIsLoading(false);
    }
  };

  const handleEnterKey = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
    script.type = 'module';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className={cn(
        "fixed bottom-20 right-20 transition-transform",
        isOpen ? "transform translate-y-0 opacity-100" : "transform translate-y-full opacity-0"
      )}>
        <div className="flex flex-col h-[500px] w-[400px] rounded-xl border bg-background shadow-lg transition-transform">
          <div className="flex items-center justify-between p-2 bg-background">
            <h2 className="text-lg font-semibold text-foreground">Chat</h2>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-muted-foreground hover:text-foreground"
              onClick={toggleChatbox}
            >
              <XIcon className="w-4 h-4" />
            </Button>
          </div>
          <ScrollArea className="flex-1 overflow-y-auto p-4">
            <div className="flex flex-col gap-4">
              {chatHistory.map((msg, index) => (
                <div key={index} className={`flex items-start gap-2 ${msg.type === 'user' ? 'justify-end' : ''}`}>
                  {msg.type === 'bot' ? (
                    <Avatar className="w-8 h-8 border">
                      <AvatarImage src="https://res.cloudinary.com/dngvge2sb/image/upload/v1721889453/Screenshot_2024-07-25_120517_vsvonk.png" />
                      <AvatarFallback>KG</AvatarFallback>
                    </Avatar>
                  ) : (
                    <Avatar className="w-8 h-8 border">
                      <AvatarImage src="https://res.cloudinary.com/dngvge2sb/image/upload/v1721906599/user.jpg" />
                      <AvatarFallback>BOT</AvatarFallback>
                    </Avatar>
                  )}
                  <div className={`grid gap-1 p-2 rounded-lg ${msg.type === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                    <div className={`font-medium text-foreground ${msg.type === 'user' ? 'text-blue-600' : ''}`}>
                      {msg.type === 'user' ? 'You' : 'HealR.ai'}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <ReactMarkdown>{msg.message}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && <div className="text-muted-foreground">...Typing</div>}
            </div>
          </ScrollArea>
          <div className="p-4 bg-background">
            <div className="flex items-center gap-2 relative">
              <textarea 
                value={userInput}
                onChange={handleUserInput}
                onKeyDown={handleEnterKey}
                className="border-input px-3 py-2  text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 w-full border rounded-full flex items-center h-9 resize-none overflow-hidden bg-background pr-10"
                placeholder="Type your message here.."
              ></textarea>
              <Button onClick={sendMessage} disabled={isLoading}>Send</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        <Button 
          variant="ghost" 
          size="icon" 
          className="transparent hover:text-foreground"
          onClick={toggleChatbox}
          style={{ width: '100px', height: '100px' }}
        >
          <dotlottie-player 
            src="https://lottie.host/02bd7a2c-e5cc-4978-9a24-b606f668cfe6/Pfm9RRaccV.json" 
            background="transparent" 
            speed="1" 
            style={{ width: "100px", height: "100px" }} 
            loop 
            autoplay
          ></dotlottie-player>
        </Button>
      </div>
    </>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

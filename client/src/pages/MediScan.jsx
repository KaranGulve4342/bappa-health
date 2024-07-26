// import ImageUpload from "@/components/custom/ImageUpload";
// import { Button } from "@/components/ui/button";
// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
// } from "@/components/ui/dialog"
// import { MoveRight } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function Mediscan() {
//   return (
//     <main className="flex justify-center items-center min-h-screen flex-col space-y-4">
//       <h1 className="text-5xl font-semibold">MediScan.ai</h1>
//       <p className="text-muted-foreground">File upload component for React</p>
//       <div className="flex gap-4">
//         <Dialog>
//           <DialogTrigger asChild>
//             <Button className="rounded-full shadow" variant="outline">
//               File upload
//             </Button>
//           </DialogTrigger>
//           <DialogContent className="sm:max-w-[425px]">
//             <DialogHeader>
//               <DialogTitle className="text-center">
//                 Upload your files
//               </DialogTitle>
//               <DialogDescription className="text-center">
//                 The only file upload you will ever need
//               </DialogDescription>
//             </DialogHeader>
//             <div className="grid gap-4 py-4">
//               <ImageUpload />
//             </div>
//           </DialogContent>
//         </Dialog>
//         {/* <Link className="flex gap-1 items-center" to="https://github.com/ManishBisht777/file-vault">
//           Github
//           <MoveRight size={15} />
//         </Link> */}
//       </div>
//     </main>
//   );
// }




// =======================================================================================================

import ImageUpload from "@/components/custom/ImageUpload";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

export default function Mediscan() {
  const [openDialog, setOpenDialog] = useState(false);
  const [textareaValue, setTextareaValue] = useState("");

  const handleProceedClick = () => {
    setOpenDialog(true);
  };

  return (
    <main className="flex justify-center items-center min-h-screen flex-col space-y-4 bg-gray-50 p-6">
      <Card className="w-full max-w-3xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-center mb-3">
            ⚕️ HealR.ai 🩺
          </CardTitle>
          <CardDescription className="text-center text-2xl font-bold">
            Your Personal Health Assistant 🤖
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col space-y-4">
          <ImageUpload />
        </CardContent>
      </Card>
    </main>
  );
}




// =======================================================================================================

// import ImageUpload from "@/components/custom/ImageUpload";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { MoveRight } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function Mediscan() {
//   return (
//     <main className="flex justify-center items-center min-h-screen flex-col space-y-4">
//       <h1 className="text-5xl font-semibold">MediScan.ai</h1>
//       <p className="text-muted-foreground">File upload component for React</p>
//       <div className="flex gap-4">
//         <Dialog>
//           <DialogTrigger asChild>
//             <Button className="rounded-full shadow" variant="outline">
//               File upload
//             </Button>
//           </DialogTrigger>
//           <DialogContent className="sm:max-w-[425px]">
//             <DialogHeader>
//               <DialogTitle className="text-center">
//                 Upload your files
//               </DialogTitle>
//               <DialogDescription className="text-center">
//                 The only file upload you will ever need
//               </DialogDescription>
//             </DialogHeader>
//             <div className="grid gap-4 py-4">
//               <ImageUpload />
//             </div>
//           </DialogContent>
//         </Dialog>
//         {/* <Link className="flex gap-1 items-center" to="https://github.com/ManishBisht777/file-vault">
//           Github
//           <MoveRight size={15} />
//         </Link> */}
//       </div>
//     </main>
//   );
// }

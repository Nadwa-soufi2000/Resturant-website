import { Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";

export default function DeleteComponent() {
  return (
    <Dialog>
        <DialogTrigger>
            <div className="w-[40px] h-[40px] p-3 hover:bg-gray-200 rounded-[10px] absolute sm:bottom-[11%] bottom-[7%] left-[3%] flex justify-center items-center"><Trash2 className="w-[16px] h-[16px]"/></div>
        </DialogTrigger>
        <DialogContent>
           <DialogHeader className="flex justify-center items-center">
               <DialogTitle>هل أنت متأكد من الحذف ؟</DialogTitle>
           </DialogHeader>
           <div className="flex justify-center items-center mx-auto gap-2">
              <Button variant="default" className="bg-red-600 rounded-xl text-[15px] text-white font-medium">حذف</Button>
              <Button variant="default" className="bg-[#666666]/5 text-[#2F2A25] text-[15px] rounded-xl font-medium">إلغاء</Button>
           </div>
        </DialogContent>
    </Dialog>
  )
}

import { Camera } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Field, FieldGroup } from "../ui/field";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function AddUser() {
  return (
    <Dialog>
       <form className="flex justify-center items-center">
       <DialogTrigger asChild>
          <Button className="w-[133px] h-[48px] shadow-xl rounded-[24px] font-medium text-[14px] text-[#FE942A]">إضافة مستخدم</Button>
       </DialogTrigger>
       <DialogContent dir="rtl" className="w-[730px] h-[740px] rounded-[8px] border-1 border-[#D2D2D2] shadow-xl">
           <DialogHeader>
              <DialogTitle className="font-medium text-[24px] text-[#474747]">إضافة مستخدم</DialogTitle>
           </DialogHeader>
           <div className=" flex flex-col justify-center items-center gap-2">
           <div className="w-[176px] h-[176px] relative">
             <img src="/user.png" alt="" className="w-full h-full rounded-full"/>
             <div className="w-[33.85px] h-[33.85px] rounded-[40px] bg-[#FF9A48] flex justify-center items-center absolute bottom-[5%] right-[8%]"><Camera className=" w-[18px] h-[18px] text-white"/></div>
           </div>
           <FieldGroup> 
              <div className="flex justify-between items-center w-full gap-2">
                 <Field className="w-[270px] h-[78px] space-y-1">
                   <Label className="font-normal text-[16px] text-[#474747]" htmlFor="name-1">رقم الهاتف</Label>
                   <Input className="w-full h-[48px] rounded-[10px] border-1 border-[#B1AEAB] pr-3" id="email-1" name="name" defaultValue="Pedro Duarte" />
                 </Field>
                 <Field className="w-[270px] h-[78px] space-y-1">
                   <Label className="font-normal text-[16px] text-[#474747]" htmlFor="name-1">الاسم الكامل</Label>
                   <Input className="w-full h-[48px] rounded-[10px] border-1 border-[#B1AEAB] pr-3" id="email-1" name="name" defaultValue="Pedro Duarte" />
                 </Field>
              </div>
              <Field className="w-full h-[82px] space-y-1">
                <Label className="font-normal text-[16px] text-[#474747]" htmlFor="name-1">البريد الإلكتروني</Label>
                <Input className="w-[533px] h-[53px] rounded-[10px] border-1 border-[#B1AEAB] pr-3" id="email-1" name="name" defaultValue="Pedro Duarte" />
              </Field>
              <Field className="w-full h-[82px] space-y-1">
                <Label className="font-normal text-[16px] text-[#474747]" htmlFor="desc-1">كلمة المرور</Label>
                <Input className="w-[533px] h-[53px] rounded-[10px] border-1 border-[#B1AEAB] pr-3" id="password-1" name="desc" defaultValue="@peduarte" />
              </Field>
              <Field className="w-full h-[82px] space-y-1">
                <Label className="font-normal text-[16px] text-[#474747]" htmlFor="confirm-1">تأكيد كلمة المرور</Label>
                <Input className="w-[533px] h-[53px] rounded-[10px] border-1 border-[#B1AEAB] pr-3" id="username-1" name="price" defaultValue="@peduarte" />
              </Field>
           </FieldGroup>
           <DialogFooter className="mx-auto">
             <Button className="w-[273px] h-[57px] rounded-[24px] bg-[#F98629] text-white font-medium text-[24px]" type="submit">إضافة</Button>
           </DialogFooter>
           </div>
         </DialogContent>
       </form>
    </Dialog>
  )
}

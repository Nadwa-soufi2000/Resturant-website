import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function AddProduct() {
  return (
    <Dialog>
      <form className="flex justify-center items-center">
        <DialogTrigger asChild>
          <Button  className="w-[108px] h-[48px] hover:bg-accent bg-white rounded-[24px] shadow-xl font-medium text-[14px] text-[#FE942A]">إضافة منتج</Button>
        </DialogTrigger>
        <DialogContent dir="rtl" className="w-[533px] h-[720px]">
          <DialogHeader>
            <DialogTitle className="font-medium text-[24px] text-[#474747]">إضافة منتج</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <div className=" flex justify-center items-center border-dashed border-1 border-[#F98629] rounded-[8px]">
              <div className="w-[237px] h-[207px] flex flex-col justify-center items-center gap-4">
                 <img src="/cloud.png" alt="" className="w-[60px] h-[60px]"/>
                 <div className="relative w-[273px] h-[57px] rounded-[24px]">
                   <input id="input" type="file" className="absolute w-full h-full top-0 w-[273px] h-[57px] rounded-[24px]"/>
                   <label htmlFor="input" className="absolute w-full h-full flex justify-center items-center top-0 z-1 w-[273px] h-[57px] rounded-[24px] bg-[#F98629] text-white font-medium text-[24px]">تحميل صورة</label>
                 </div>
                 <p className="text-[14px] text-[#474747] font-medium">JPG , JPEG , PNG فقط</p>
              </div>
            </div>
            <Field className="w-full h-[87px] space-y-2">
              <Label className="font-normal text-[16px] text-[#474747]" htmlFor="name-1">اسم المنتج</Label>
              <Input className="w-[533px] h-[53px] rounded-[10px] border-1 border-[#B1AEAB] pr-3" id="name-1" name="name" defaultValue="Pedro Duarte" />
            </Field>
            <Field className="w-full h-[87px] space-y-2">
              <Label className="font-normal text-[16px] text-[#474747]" htmlFor="desc-1">وصف المنتج</Label>
              <Input className="w-[533px] h-[53px] rounded-[10px] border-1 border-[#B1AEAB] pr-3" id="username-1" name="desc" defaultValue="@peduarte" />
            </Field>
            <Field className="w-full h-[87px] space-y-2">
              <Label className="font-normal text-[16px] text-[#474747]" htmlFor="price-1">سعر المنتج</Label>
              <Input className="w-[533px] h-[53px] rounded-[10px] border-1 border-[#B1AEAB] pr-3" id="username-1" name="price" defaultValue="@peduarte" />
            </Field>
          </FieldGroup>
          <DialogFooter className="mx-auto">
            <Button className="w-[273px] h-[57px] rounded-[24px] bg-[#F98629] text-white font-medium text-[24px]" type="submit">إضافة</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}



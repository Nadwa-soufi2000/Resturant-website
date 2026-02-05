import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            variant="default"
            className="bg-[#666666]/5 text-[#2F2A25] text-[15px] font-medium w-[142.19px] h-12 rounded-xl"
          >
            تسجيل الدخول
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-center">تسجيل الدخول</DialogTitle>
            <DialogDescription className="text-center">
              أدخل بريدك الإلكتروني و كلمة المرور لتسجيل الدخول لحسابك
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">البريد الإلكتروني</Label>
              <Input className="outline-none text-[#666666]/16" id="email-1" name="" defaultValue="peduarte@gmail.com" />
            </Field>
            <Field>
              <Label htmlFor="username-1">كلمة المرور</Label>
              <Input className="outline-none text-[#666666]/16" id="password-1" name="" defaultValue="5xxxxxxx" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <Button variant="default" className="bg-[#666666]/5 text-[#2F2A25] rounded-xl text-[15px] font-medium">تسجيل دخول</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}


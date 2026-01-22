import CardOrder from "@/components/CardOrder"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const orders = [
  {
    id: 1,
    name: "بيتزا بيروني",
    price: "18,000 ل.س",
    amount: 1,
    img: "/food2.png",
  },
  {
    id: 2,
    name: "بيتزا بيروني",
    price: "18,000 ل.س",
    amount: 1,
    img: "/food2.png",
  },
  {
    id: 3,
    name: "بيتزا بيروني",
    price: "18,000 ل.س",
    amount: 1,
    img: "/food2.png",
  },
]

function SummaryRow({
  label,
  value,
  isBold = false,
}: {
  label: string
  value: string
  isBold?: boolean
}) {
  return (
    <div
      className={`flex w-[94%] items-center justify-between border-b border-b-[#666666]/16 px-2 py-4 ${
        isBold ? "text-[20px] font-bold" : "text-[16px] font-medium"
      } text-[#2F2A25]`}
    >
      <p>{value}</p>
      <p>{label}</p>
    </div>
  )
}

export default function Orders() {
  return (
    <div>
      <Navbar />
      <div className="mx-auto flex  w-full flex-col-reverse items-center justify-between gap-6 px-4 py-6 xl:w-[1200px] xl:flex-row xl:items-start md:px-0">
        {/* Order Summary Card */}
        <Card className="flex h-auto w-full max-w-[426px] flex-col items-center justify-start gap-3 rounded-[8px] border border-[#666666]/16 bg-card pt-3 shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02] md:h-[523px] md:w-[426px]">
          <CardHeader className="w-full text-center text-[20px] font-bold text-[#2F2A25] sm:text-[24px]">
            ملخص الطلب
          </CardHeader>

          <CardContent className="flex w-full flex-col items-center justify-center gap-4 px-4 sm:w-[410px] sm:px-0">
            <SummaryRow label="عدد الأصناف" value="3" />
            <SummaryRow label="المجموع الفرعي" value="36,000" />
            <SummaryRow label="المجموع الكلي" value="36,000" isBold />

            <textarea
              placeholder="أضف ملاحظاتك"
              dir="rtl"
              className="h-28 w-full max-w-[380px] rounded-lg border border-muted-foreground/15 p-3 text-[16px] font-normal focus:outline-none focus:ring-2 focus:ring-orange-500/50 sm:w-[380px]"
            />

            <Button
              variant="default"
              className="h-14 w-full sm:w-[394px] rounded-[8px] border-[#666666]/16 bg-[#F49618]/10 text-[18px] font-bold text-[#F49618] backdrop-blur-[30px] transition-colors hover:bg-orange-500/20 sm:text-[20px]"
            >
              تأكيد الطلب
            </Button>
          </CardContent>
        </Card>

        {/* Order Items List */}
        <div className="flex w-full flex-col items-center justify-start gap-3 md:w-[727px]">
          {orders.map((item) => (
            <CardOrder
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              img={item.img}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
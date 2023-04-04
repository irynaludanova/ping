import { Button } from "@material-tailwind/react"
import { useLocale } from "@/hooks"

export default function MyButton() {
  const t = useLocale()
  return (
    <div className="flex gap-4 w-max">
      <Button ripple={true} color="indigo" size="md" variant="gradient">
        {t.buy}
      </Button>
    </div>
  )
}

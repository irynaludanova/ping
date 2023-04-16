import { Button } from "@material-tailwind/react"
import { useLocale } from "@/hooks"

export const MyButton = (onClickHandler: any) => {
  const t = useLocale()
  return (
    <div className="flex gap-4 w-max">
      <Button
        ripple={true}
        color="indigo"
        size="md"
        variant="gradient"
        onClick={onClickHandler}
      >
        {t.buy}
      </Button>
    </div>
  )
}

import { Button, Input } from "antd"

const Filter = () => {
  return (
    <div className="flex justify-between mb-6">
      <div className="flex w-1/2 gap-3">
        <Input placeholder="poisk" type="text" />
        <Button type="primary">search</Button>
      </div>
      <Button type="dashed" className="text-blue-500">
        создать новый товар
      </Button>
    </div>
  )
}

export default Filter

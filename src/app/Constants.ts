interface TargetType {
  cell?: number,
  img?: HTMLImageElement,
  isKing?: boolean
  isPawnWhite?: boolean

}

export default class Constants {

  public static elementOnDrag: TargetType = {}

  public static elementTarget: string = ''

  static canItMove(param:TargetType) {
    const {isKing,isPawnWhite,cell} = param
    const id = String(param.cell)
    const rowIndex = parseInt(id.charAt(4))
    const colIndex = parseInt(id.charAt(6))

    const targetRowIndex = parseInt(this.elementTarget.charAt(4))
    const targetColIndex = parseInt(this.elementTarget.charAt(6))

    if (isKing) {
      return ((Math.abs(rowIndex - targetRowIndex) == 0) || (Math.abs(rowIndex - targetRowIndex) == 1)) && ((Math.abs(colIndex - targetColIndex) == 0) || (Math.abs(colIndex - targetColIndex) == 1));
    }

    if (isPawnWhite) {
    return ((targetRowIndex==rowIndex-1)&&(targetColIndex==colIndex))
    }else return   ((targetRowIndex==rowIndex+1)&&(targetColIndex==colIndex))




  }
}

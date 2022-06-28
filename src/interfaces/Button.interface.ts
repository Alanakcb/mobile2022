export interface ButtonProps{
    onPress: () => void
    title: string
    type: 'primary' | 'black' | 'third'
}
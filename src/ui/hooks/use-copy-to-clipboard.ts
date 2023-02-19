export const useCopyToClipboard = () => {
  return (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text)
    } else {
      document.execCommand('copy', true, text)
    }
  }
}

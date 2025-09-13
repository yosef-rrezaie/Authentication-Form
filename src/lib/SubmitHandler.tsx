const PATTERN = /^(09\d{9}|\+989\d{9}|00989\d{9})$/;

function submitHandler(
  e: React.FormEvent<HTMLFormElement>,
  inputValue: string,
  setInvalidMessage: React.Dispatch<React.SetStateAction<string>>,
  mutation: { mutate: () => void }
): void {
  e.preventDefault();
  const value = inputValue.trim();

  if (!value) {
    setInvalidMessage("لطفا شماره را وارد کنید");
    return;
  }
  if (!PATTERN.test(value)) {
    setInvalidMessage("شماره موبایل نادرست است");
    return;
  }
  setInvalidMessage("");
  mutation.mutate();
}

export { submitHandler };

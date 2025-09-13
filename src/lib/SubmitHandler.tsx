function submitHandler(
  e: React.FormEvent<HTMLFormElement>,
  invalidMessage: string,
  mutation: { mutate: () => void }
): void {
  e.preventDefault();
  if (invalidMessage !== "") {
    return;
  }
  mutation.mutate();
}

export { submitHandler };

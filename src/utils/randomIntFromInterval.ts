function shuffleArray(array: number[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// m là số lượng output của mảng
// N là điểm cuối
function randomNonRepeatingNumbers(N: number, m: number) {
  if (m > N) {
    throw new Error("m không thể lớn hơn N");
  }

  const numbers = Array.from({ length: N }, (_, index) => index + 1);

  shuffleArray(numbers);

  return numbers.slice(0, m);
}

export default randomNonRepeatingNumbers;

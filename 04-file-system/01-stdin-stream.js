console.log(`This process is pid ${process.pid}`);
console.log(`This platform is ${process.platform}`);

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`data: ${chunk}`);
  }
});

// Press Cmd + D on OSX, or Ctrl + D on Windows
process.stdin.on('end', () => {
  console.log('stdin stream ended.');
  process.stdout.write('end');
});

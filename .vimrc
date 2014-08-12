function! RunKarmaTests()
  execute '!npm test'
  " let path_without_extension=substitute(@%, '.js', '', '')
  " if path_without_extension=~"[tests]"
  "   execute '!./node_modules/.bin/intern-runner --config=tests/intern suites=' . path_without_extension
  " else
  "   echo "This is not a valid test file"
  " endif
endfunction

function! RunAllInternTests()
  execute '!./node_modules/.bin/intern-runner config=tests/intern'
endfunction

au BufNewFile,BufRead,BufEnter *.js nnoremap <leader>t :call RunKarmaTests()<CR>
" au BufNewFile,BufRead,BufEnter *.js nnoremap <leader>T :call RunAllInternTests()<CR>
au BufNewFile,BufRead,BufEnter *.rb nnoremap <leader>t :VroomRunTestFile<cr>

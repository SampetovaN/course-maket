# -*- coding: utf-8 -*- 
from tokenizer import is_word
from nltk.corpus import PlaintextCorpusReader

corpus_root = './corpora_local/testrus'
wordlists = PlaintextCorpusReader(corpus_root, '.*')
for sent in wordlists.sents():
  for word in sent:
    goodWord = word.lower().encode('utf8')
    if is_word(goodWord): print goodWord

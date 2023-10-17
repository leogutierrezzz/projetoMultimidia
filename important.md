## scripts úteis:




# Baixa em MP4 um vídeo

` from pytube import YouTube

# URL do vídeo que você deseja baixar
video_url = 'https://www.youtube.com/watch?v=zG5gWncAhls'

# Crie um objeto YouTube com a URL do vídeo
yt = YouTube(video_url)

# Escolha a maior resolução disponível (pode variar dependendo do vídeo)
video_stream = yt.streams.get_highest_resolution()

# Especifique o diretório onde você deseja salvar o vídeo (substitua 'caminho/para/seu/diretorio' pelo diretório real)
save_path = '/home/leonardogut/js'

# Faça o download do vídeo
video_stream.download(output_path=save_path)

print('Download concluído!')`









# Transforma MP4 em MP3

ffmpeg -i lets.mp4 -vn -ab 128 audiovideo.mp3 
from pytube import YouTube

# URL do vídeo que você deseja baixar
video_url = 'https://youtu.be/HYVHfsPu_k8?si=hINyvaBCWxvGV5Zn'

# Crie um objeto YouTube com a URL do vídeo
yt = YouTube(video_url)

# Escolha a maior resolução disponível (pode variar dependendo do vídeo)
video_stream = yt.streams.get_highest_resolution()

# Especifique o diretório onde você deseja salvar o vídeo (substitua 'caminho/para/seu/diretorio' pelo diretório real)
save_path = '/home/leonardogut/Downloads/ffmpeg-6.0-full_build-20231009T222430Z-001/ffmpeg-6.0-full_build/bin'

# Faça o download do vídeo
video_stream.download(output_path=save_path)

print('Download concluído!')
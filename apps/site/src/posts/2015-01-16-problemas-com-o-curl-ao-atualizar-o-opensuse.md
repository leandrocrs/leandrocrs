---
id: 651
title: Problemas com o cURL ao atualizar o Opensuse
date: 2015-01-16T22:57:18+00:00
author: leandrw
guid: http://blog.leandrw.com.br/?p=631
slug: /problemas-com-o-curl-ao-atualizar-o-opensuse/
original_post_id:
  - "631"
dsq_thread_id:
  - "6034521138"
image: /images/posts/2018/09/f-aReEUB_400x400.jpg
categories:
  - Sem categoria
tags:
  - curl
  - ipv6
  - Linux
  - opensuse
  - problema
  - solução
  - zypper
---
Recentemente decidi voltar ao GNU Linux para retomar meus estudos de Ruby on Rails e Mono. Não que o <a href="https://www.vagrantup.com/" target="_blank" rel="noopener">Vagrant</a> não pudesse me atender adequadamente, mas almejava uma imersão maior na plataforma. Fora que fazer praticamente tudo do meu jeito e deixá-lo como quero são coisas que tenho sentido falta no Windows. Após a instalação da distribuição Opensuse, me deparei com o seguinte erro ao tentar atualizar os pacotes:
```
Download (curl) error for 'http://download.opensuse.org/distribution/13.2/repo/non-oss/content':
Error code: Connection failed
Error message: Failed to connect to download.opensuse.org port 80: Network is unreachable
Abort, retry, ignore? [a/r/i/? shows all options] (a):
```

Após pesquisar um pouco sobre a falha, encontrei no forum do opensuse a resposta: o curl tenta resolver os nomes como IPV6 por padrão, protocolo que no momento em que escrevo este post ainda não foi totalmente adotado no Brasil. Para resolver, basta forçar que o sistema utilize o IPV4 por padrão:

Adicionar as linhas abaixo no arquivo **/etc/sysctl.conf**:
```ini
#disable ipv6
net.ipv6.conf.all.disable_ipv6 = 1
net.ipv6.conf.default.disable_ipv6 = 1
net.ipv6.conf.lo.disable_ipv6 = 1
```

Executar o comando abaixo como <code>sudo su</code>:
```bash
echo 1 > /proc/sys/net/ipv6/conf/all/disable_ipv6
```

Reiniciar o sistema de pronto. Aqui funcionou. Caso precise de mais ajuda acompanhe a thread do fórum oficial do opensuse abaixo

## Referências:
Discussão sobre a falha no fórum oficial (inglês):
<a href="https://forums.opensuse.org/showthread.php/502176-YaST-is-unable-to-connect-to-repository-server-openSUSE-13-2?highlight=curl" target="_blank" rel="noopener">https://forums.opensuse.org/showthread.php/502176-YaST-is-unable-to-connect-to-repository-server-openSUSE-13-2?highlight=curl</a>

Solução resumida:
<a href="http://www.businesscorner.co.uk/disable-ipv6-in-curl-and-php/" target="_blank" rel="noopener">http://www.businesscorner.co.uk/disable-ipv6-in-curl-and-php/</a>

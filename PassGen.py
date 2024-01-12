import string as S
import random as R
passwd = R.sample(S.ascii_letters,5)
passwd.extend(R.sample(S.digits,2))
punForPass = ['@','#','$','&','*']
passwd.extend(R.sample(punForPass,2))
R.shuffle(passwd)
passwd = "".join(passwd)
print(passwd)

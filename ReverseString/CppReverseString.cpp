#include<string>
#include<iostream>

using namespace std;

string reverse(string str)
{
    string reversed = "";
    for (char c : str)
    {
        reversed = c + reversed;
    }
    return reversed;
}

string reverse_with_iterator(string str)
{
    string reversed = "";
    for (auto rit = str.rbegin(); rit != str.rend(); ++rit)
    {
        reversed += *rit;
    }
    return reversed;
}

int main()
{
    cout << reverse("ABC");
    return 0;
}
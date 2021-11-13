#include <iostream>

using namespace std;

int knapSack(int W, int weight[], int value[], int n){
int i, w;
int P[n+1][W+1];

for(i = 0; i<=n; i++){
    for(w = 0; w<=W ; w++){
        if(i==0 || w==0)
            P[i][w]=0;
        else if (weight[i-1]<=w)
            P[i][w] = max(value[i-1]+P[i-1][w-weight[i-1]], P[i-1][w]);
        else
            P[i][w] = P[i-1][w];
    }
}
return P[n][W];
}

int main(){
int n, i, W, weight[20], value[20];
cout<<"Enter the number of items: ";
cin>>n;

for(i=0; i<n; i++){
    cin>>weight[i];
    cin>>value[i];
}
cout<<"Enter the size of the KnapSack: ";
cin>>W;

int profit = knapSack(W, weight, value, n);
cout<<"Max Profit = "<< profit<<endl;

}
